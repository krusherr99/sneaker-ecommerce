import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import axios from 'taro-axios';
import './index.less'

import SplitLine from '../components/SplitLine'
import Product from '../components/Product'
import { getSkuById, getSkuByIdTest } from '../api/request'
import { connect } from '@tarojs/redux';
import PayMoney from '../components/PayMoney'
import { duration } from 'moment';

const remindingList = [
  '1、若商家未早36小时内发货导致交易失败，您将获得1130.45元现金及总计人民币170元的满减优惠券补偿。',
  '2、每件交易商品均由平台针对实物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等强开，故不支持退换差价。',
  '3、温馨提示：商品价格由市场供需决定，可能存在波动，请理性消费',
  '4、个人卖家ID: P905158520，商品属于个人全新闲置物品，市场价格存在波动，故不适用7天无理由退货。'
]

export type OrderItem = {
  spuId: number,
  imageUrl: string,
  size: string,
  title: string,
  price: number,
}

interface OrderConfirmPageProps {
  address: any
}
interface OrderConfirmPageState {
  skuId: string
  addressId: number
  orderItem: OrderItem,
  name: string,
  phone: string,
  address: string
  showPay: boolean
  payFinish: boolean
}


@connect(({ address }) => ({ address }))
export default class OrderConfirmPage extends Component<OrderConfirmPageProps, OrderConfirmPageState> {

  state: OrderConfirmPageState = {
    skuId: '',
    addressId: 0,
    orderItem: {
      spuId: 0,
      imageUrl: '',
      size: '',
      title: '',
      price: 0
    },
    name: '',
    phone: '',
    address: '',
    showPay: false,
    payFinish: false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.address.addressId !== this.props.address.addressId) {
      console.log("props不一样,执行了");
      axios.get(`http://172.20.10.11:8080/address/${this.props.address.addressId}`)
        .then(resp => {
          const { name, phone, detailAddress, province, city, district } = resp.data.data
          const address = province + city + district + detailAddress;
          this.setState({ name, phone, address })
        })
        .catch(err => {
          console.log(err);
        })
    }

    if (prevState.payFinish !== this.state.payFinish) {

    }
  }

  componentWillMount() {
    const { skuId } = this.$router.params
    this.setState({ skuId })
    console.log(this.$router.params);
  }


  componentDidMount() {
    const { skuId } = this.state
    axios.get(`http://172.20.10.11:8080/product/sku/${skuId}`)
      .then(resp => {
        this.setState({ orderItem: resp.data.data })
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`http://172.20.10.11:8080/address/${this.props.address.addressId}`)
      .then(resp => {
        const { name, phone, detailAddress, province, city, district } = resp.data.data
        const address = province + city + district + detailAddress;
        this.setState({ name, phone, address })
      })
      .catch(err => {
        console.log(err);
      })

  }

  selectAddress = () => {
    Taro.navigateTo({
      url: '/account/ShippingAddressPage/index'
    })
  }

  finishPay = () => {
    const { orderItem: { spuId, price }, skuId, address, phone, name, } = this.state

    this.setState({ payFinish: true })
    Taro.showToast({
      title: '提交订单中',
      duration: 2000,
      icon: 'loading'
    })

    axios.post(
      'http://localhost:8080/order',
      {
        userId: 5,
        spuId,
        skuId,
        address,
        phone,
        name,
        price
      }
    )

    setTimeout(() => {
      Taro.redirectTo({
        url: '/order/BuyPaySuccessPage/index'
      })
    }, 2000)
  }

  confirmOrder = () => {

    this.setState({ showPay: true })
    // Taro.showModal({
    //   title: '确认放弃支付吗?',
    //   content: '放弃订单支付后，订单将被取消，请尽快完成支付\n ',
    //   cancelText: '放弃',
    //   confirmText: '继续支付'
    // })
    //   .then(res => console.log(res.confirm, res.cancel))
  }

  render() {
    const { orderItem, name, address, phone, showPay } = this.state
    return (
      <View>
        <View className='address-info-container' onClick={this.selectAddress}>
          <Image className='location' src="http://cdn.poizon.com/node-common/cGxhY2UxNTgzMjIyMDAwNTgz.svg"></Image>
          <View className='info'>
            {
              name
                ?
                <View>
                  <View className='user'>
                    <View className='name'>{name}</View>
                    <View className='mobile'>{phone}</View>
                    <Image className='arrow' src="http://cdn.poizon.com/node-common/ZW50ZXIxNTgzMzE3MjkxMzI0.svg"></Image>
                  </View>
                  <View className='address'>{address}</View>
                </View>
                :
                <View>添加收货地址</View>
            }

          </View>
        </View>
        <SplitLine lineHeight={16} />
        <Product orderItem={orderItem} />
        <SplitLine lineHeight={16} />
        <View className='cost-details-info'>
          <View className='delivery'>
            <View className='lable'>顺丰速运</View>
            <View className='cost'>
              <Text className='unit'>￥</Text>
              <Text className='price'>23</Text>
            </View>
          </View>
        </View>
        <SplitLine lineHeight={16} />
        <View className='purchase-reminding-container'>
          {
            remindingList.map(item => {
              return (
                <View key={item} className='item'>{item}</View>
              )
            })
          }
          <View className='item'>
            提交订单即表示同意 <Text className='must-see'>买家须知</Text>
          </View>
        </View>
        <View className='bottem-space'></View>
        <View className='footer-wrapper'>
          <View className='submit-info-container'>
            <View className='detail'>
              <View className="desc">实付款：</View>
              <View className="unit">¥</View>
              <View className="amount">{orderItem.price + 23}</View>
            </View>
            <View className='operator' onClick={this.confirmOrder}>提交订单</View>
          </View>
        </View>

        {
          showPay ? <PayMoney finishPay={this.finishPay} /> : ''
        }

      </View>
    )
  }
}

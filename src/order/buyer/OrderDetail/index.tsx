import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import './index.less'

import SplitLine from '../../components/SplitLine'
import Product from '../../components/Product'
import classNames from 'classnames';
import axios from 'taro-axios'
import { OrderItem } from '../../index';
import moment from 'moment'


// const paymentList = [
//   {
//     amountTitle: '顺丰速运',
//     amount: 23
//   },
//   {
//     amountTitle: '待支付',
//     amount: 2712
//   },
// ]

// const orderInfoList = [
//   {
//     mainText: '订单编号',
//     subText: '110100442555407530',
//   },
//   {
//     mainText: '创建时间',
//     subText: '2020-04-02 17:48:19',
//   }
// ]

// const buttonList = [
//   {
//     text: '取消订单',
//     type: 0
//   },
//   {
//     text: '立即付款',
//     type: 1
//   }
// ]

interface OrderDetailProps { }
interface OrderDetailState {
  orderId: number,
  orderItem: any
}

export default class OrderDetail extends Component<OrderDetailProps, OrderDetailState> {

  state: OrderDetailState = {
    orderId: 0,
    orderItem: {}
  }

  componentWillMount() {
    this.setState({ orderId: parseInt(this.$router.params.orderId) })
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/order/${this.state.orderId}`)
      .then(resp => {
        this.setState({
          orderItem: {
            ...resp.data.data,
            createTime: moment(resp.data.data.createTime * 1000).format('YYYY-MM-DD HH:mm:ss')
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { orderItem } = this.state

    return (
      <View>
        <View className='container-view'>
          <View className="status-area-view">
            <View className="status-text-view">
              <View className="status-text">{orderItem.status}</View>
              <View className="status-sub-text">{'您的订单已提交成功，请耐心等待'}</View>
            </View>

            {
              orderItem.status === '待付款'
                ?
                <View className="time-view">
                  <View className="time-clock-text">7:55</View>
                  <View className="time-text">支付剩余时间</View>
                </View>
                : ''
            }

          </View>
          <View className="address-view ">
            <Image className="address-icon " src="//cdn.poizon.com/node-common/cGxhY2UxNTgzMjIyMDAwNTgz.svg"></Image>
            <View className="name-phone-detail-text ">
              <View className="name-phone-text ">
                <View>{`收货人: ${orderItem.name}`}</View>
                <View>182****7296</View>
              </View>
              <View className="address-detail-text ">{orderItem.address}</View>
            </View>
          </View>
          <SplitLine lineHeight={16} />
          <Product orderItem={orderItem} />
          <SplitLine lineHeight={16} />
          <View className="payment-detail-container ">
            {/* {
              paymentList.map(item => {
                return ( */}

            <View className="item">
              <View className="title">顺丰速运</View>
              <View className="price ">
                {/* <Text className="symbol ">{{ ''+(item[$orig].isPlus ? '' : '-') + '¥' }}</Text> */}
                <Text className="symbol ">¥</Text>
                      23</View>
            </View>

            <View className="item">
              <View className="title">商品总价</View>
              <View className="price ">
                {/* <Text className="symbol ">{{ ''+(item[$orig].isPlus ? '' : '-') + '¥' }}</Text> */}
                <Text className="symbol ">¥</Text>
                {orderItem.price}
              </View>
            </View>

            {/* )
              })
            } */}
          </View>
          <View className="payment-total-container ">
            <View className="layble ">合计支付</View>
            <View className="content ">
              <View className="symbol ">¥</View>
              <View className="sum ">{orderItem.price + 23}</View>
            </View>
          </View>
          <SplitLine lineHeight={16} />
          <View className="order-info-view ">
            {/* {
              orderInfoList.map((item, index) => {
                return ( */}

            <View className="list-row-between-view order-info-container ">
              <View className="order-info-text ">订单编号</View>
              <View className="order-info-sub-text ">{orderItem.orderNo}</View>
              <View className="order-no-copy ">复制</View>
            </View>

            <View className="list-row-between-view order-info-container ">
              <View className="order-info-text ">创建时间</View>
              <View className="order-info-sub-text ">{orderItem.createTime}</View>
            </View>

            {/* )
               })
            } */}
          </View >
          <View className={classNames('bottom-space ', { 'bottom-space-fix-iphonex': false })}></View>
          <View className="{{['fix-bottom-view ',isIpx?'fix-iphonex':'']}}">
            <View className="bottom-view ">
              <Button className="kf-buton "></Button>
              <View className={classNames('button-list ', { 'iphonex-button-list': false })}>
                {/* {
                  buttonList.map(item => { */}

                <View className={classNames('oper-button ', { 'iphonex-btn-item btn-item': false })}>
                  删除订单
                </View>

                {/* })
                } */}
              </View>
            </View>
          </View>
        </View >
      </View >
    )
  }
}

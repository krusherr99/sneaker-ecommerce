import Taro, { Component, createSelectorQuery } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import './index.less'
import item from './images/item.png'
import small_icon from './images/small_icon.png'
import axios from 'taro-axios'

const tabList = [
  { title: '待付款', width: 42 },
  { title: '待发货', width: 42 },
  { title: '待收货', width: 42 },
  { title: '全部订单', width: 56 },
]

export type OrderItem = {
  orderId: number,
  status: string,
  title: string,
  size: string,
  price: number,
  indexImage: string,
  createTime: string
}


interface OrderProps { }
interface OrderState {
  headerWidth: number;
  selectTab: number;
  selectTabWidth: number;
  animationIconWidth: number;
  slideOffset: number;
  orderList: Array<OrderItem>
}

export default class Order extends Component<OrderProps, OrderState> {

  state: OrderState = {
    headerWidth: 0,
    selectTab: 3,
    selectTabWidth: 0,
    animationIconWidth: 0,
    slideOffset: 308.16667556762695,
    orderList: []
  }

  selectTabTap = (selectTab) => {
    const selectorQuery = createSelectorQuery()
    selectorQuery
      .select('.select')
      .fields({
        size: true,
        rect: true
      }, resp => {
        this.setState({
          // 获得select bar的宽度
          selectTabWidth: resp.width
        })
      })
      .exec()

    const { headerWidth } = this.state
    let width = 0;
    for (let i = 0; i < selectTab; i++) {
      width = width + tabList[selectTab - 1].width
    }
    width = width + ((headerWidth - 182) / 8) * (selectTab * 2 + 1) + (tabList[selectTab].width - 30) / 2
    this.setState({
      slideOffset: width,
      selectTab
    })

  }

  navigateToDetail = (orderId) => {
    Taro.navigateTo({
      url: `/order/buyer/OrderDetail/index?orderId=${orderId}`
    })
  }

  componentDidMount() {
    const selectTab = parseInt(this.$router.params.selectTab)
    this.setState({ selectTab: selectTab })

    const selectorQuery = createSelectorQuery()
    selectorQuery
      .select('.fix-header')
      .fields({ size: true }, resp => {
        this.setState({
          headerWidth: resp.width
        })
      })
      .exec()
    selectorQuery
      .select('.animation-icon')
      .fields({ size: true }, resp => {
        this.setState({
          animationIconWidth: resp.width
        }, () => { this.selectTabTap(this.state.selectTab) })
      })
      .exec()

    // get请求orderList
    axios.get(`http://localhost:8080/order?userId=5&status=${selectTab}`)
      .then(resp => {
        this.setState({ orderList: resp.data.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate(preProps, preState) {
    if (preState.selectTab !== this.state.selectTab) {
      axios.get(`http://localhost:8080/order?userId=5&status=${this.state.selectTab}`)
        .then(resp => {
          this.setState({ orderList: resp.data.data })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    const { selectTab, slideOffset, orderList } = this.state
    return (
      <View className='container-view'>

        <View className='fix-header'>
          {
            tabList.map((tab, index) => {
              return (
                <View
                  key={tab.title}
                  className={classNames('header-item', { 'select': index === selectTab })}
                  onClick={this.selectTabTap.bind(this, index)}
                >{tab.title}
                </View>
              )
            })
          }
          <View className='animation-icon' style={{ transform: `translateX(${slideOffset}px)` }}></View>
        </View>
        <View className='list-view'>

          {
            orderList.length > 0
              ?
              orderList.map(order => {
                return (
                  <View key={order.createTime} className='list-item'>
                    <View className='order-status'>{order.status}</View>
                    <View className='order-detail' onClick={this.navigateToDetail.bind(this, order.orderId)}>
                      <View className='image-container'>
                        <Image src={order.indexImage}></Image>
                      </View>
                      <View className='order-content'>
                        <View className='order-title'>{order.title}</View>
                        <View className='order-size'>{`${order.size} 数量x1`}</View>
                        <View className='price-wrapper'>
                          <Image src={small_icon}></Image>
                          <Text className='order-price'>{`￥${order.price}`}</Text>
                        </View>
                      </View>
                    </View>
                    <View className='button-wrap'>
                      <View className='order-button'>删除订单</View>
                    </View>
                  </View>
                )
              })
              :
              <View className='result-empty'>这里还没有内容</View>
          }

        </View>
      </View>
    )
  }
}

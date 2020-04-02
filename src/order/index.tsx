import Taro, { Component, createSelectorQuery } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import './index.less'
import item from './images/item.png'
import small_icon from './images/small_icon.png'

const tabList = [
  { title: '待付款', width: 42 },
  { title: '待发货', width: 42 },
  { title: '待收货', width: 42 },
  { title: '全部订单', width: 56 },
]

interface OrderProps { }
interface OrderState {
  headerWidth: number;
  selectTab: number;
  selectTabWidth: number;
  animationIconWidth: number;
  slideOffset: number;
}

export default class Order extends Component<OrderProps, OrderState> {

  state: OrderState = {
    headerWidth: 0,
    selectTab: 0,
    selectTabWidth: 0,
    animationIconWidth: 0,
    slideOffset: 30.125
  }

  selectTabTap = (selectTab) => {
    // let width = 0
    // for (let i = 0; i < selectTab; i++) {
    //   width = width + tabList[selectTab - 1].width
    // }
    // width = width + 24.125 +  48.25 * (selectTab) + (tabList[selectTab].width - 30) / 2
    // this.setState({ selectTab, slideOffset: width })
    const selectorQuery = createSelectorQuery()
    selectorQuery
      .select('.select')
      .fields({
        size: true,
        rect: true
      }, resp => {
        this.setState({
          selectTabWidth: resp.width
        })

      })
      .exec()
    const { headerWidth } = this.state
    let width = 0;
    for (let i = 0; i < selectTab; i++) {
      width = width + tabList[selectTab - 1].width
    }
    width = width + ((headerWidth - 182) / 8) * (selectTab * 2 + 1) +  (tabList[selectTab].width - 30) / 2
    this.setState({
      slideOffset: width,
      selectTab
    }, () => { console.log(this.state.slideOffset); })

  }

  componentDidMount() {
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
        })
      })
      .exec()

  }

  render() {
    const { selectTab, slideOffset } = this.state
    return (
      <View className='container-view'>
        
        <View className='fix-header'>
          {
            tabList.map((tab, index) => {
              return (
                <View
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

          <View className='list-item'>
            <View className='order-status'>交易关闭</View>
            <View className='order-detail'>
              <View className='image-container'>
                <Image src={item}></Image>
              </View>
              <View className='order-content'>
                <View className='order-title'>Air Jordan 1 Retro High Shadow (2018) 影子</View>
                <View className='order-size'>40 数量x1</View>
                <View className='price-wrapper'>
                  <Image src={small_icon}></Image>
                  <Text className='order-price'>￥2619</Text>
                </View>
              </View>
            </View>
            <View className='button-wrap'>
              <View className='order-button'>删除订单</View>
            </View>
          </View>

          <View className='list-item'>
            <View className='order-status'>交易关闭</View>
            <View className='order-detail'>
              <View className='image-container'>
                <Image src={item}></Image>
              </View>
              <View className='order-content'>
                <View className='order-title'>Air Jordan 1 Retro High Shadow (2018) 影子</View>
                <View className='order-size'>40 数量x1</View>
                <View className='price-wrapper'>
                  <Image src={small_icon}></Image>
                  <View className='order-price'>￥2619</View>
                </View>
              </View>
            </View>
            <View className='button-wrap'>
              <View className='order-button'>删除订单</View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

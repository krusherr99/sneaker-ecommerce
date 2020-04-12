import Taro, { Component } from '@tarojs/taro'
import { View, Image, Label } from '@tarojs/components'
import './index.less'

import order_icon from './order_icon.png'
import right_icon from './right_icon.png'
export default class MineOrder extends Component {

  selectTap = (selectTab) => {
    Taro.navigateTo({
      url: `/order/index?selectTab=${selectTab}`
    })
  }

  render () {
    return (
      <View className='mine-order'>
        <View className='header'>
          <View className='title-wrapper'>
            <Image className='order-icon' src={order_icon}></Image>
            <Label className='title'>购买</Label>
          </View>
          <View className='all-order-entry' onClick={this.selectTap.bind(this, 3)}>
            <View className='all-order'>全部订单</View>
            <Image className='right-icon' src={right_icon}></Image>
          </View>
        </View>
        <View className='content'>

          <View className='item' onClick={this.selectTap.bind(this, 0)}>
            <View className='icon-wrapper'>
              <Label className='iconfont icon-card'></Label>
            </View>
            <View className='text' >待付款</View>
          </View>

          <View className='item' onClick={this.selectTap.bind(this, 1)}>
            <View className='icon-wrapper'>
              <Label className='iconfont icon-return_address'></Label>
            </View>
            <View className='text'>待发货</View>
          </View>

          <View className='item' onClick={this.selectTap.bind(this, 2)}>
            <View className='icon-wrapper'>
              <Label className='iconfont icon-car'></Label>
            </View>
            <View className='text'>待收货</View>
          </View>
        </View>
      </View>
    )
  }
}

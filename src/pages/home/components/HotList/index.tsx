import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import item from './item.jpg'

export default class HotList extends Component {

  render() {
    return (
      <View className='hot-list'>
        <View className='product'>
          <Image className='product-image' src={item}></Image>
          <View className='product-title'>Air Jordan 11 康扣</View>
          <View className='price-info'>
            <View className='unit-price-view'>
              <View className='unit'>￥</View>
              <View className='price'>2279</View>
            </View>
            <View className='sold-number'>5957人付款</View>
          </View>
        </View>
        <View className='product'>
          <Image className='product-image' src={item}></Image>
          <View className='product-title'>Air Jordan 11 康扣</View>
          <View className='price-info'>
            <View className='unit-price-view'>
              <View className='unit'>￥</View>
              <View className='price'>2279</View>
            </View>
            <View className='sold-number'>5957人付款</View>
          </View>
        </View>
      </View>
    )
  }
}

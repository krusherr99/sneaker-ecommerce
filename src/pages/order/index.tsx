import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.less'
import item from './images/item.png'
import small_icon from './images/small_icon.png'
export default class Order extends Component {

  render() {
    return (
      <View className='container-view'>
        <View className='fix-header'>
          <View className='header-item'>待付款</View>
          <View className='header-item'>待发货</View>
          <View className='header-item'>待收货</View>
          <View className='header-item'>全部订单</View>
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
                    <Text className='order-price'>￥2619</Text>
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

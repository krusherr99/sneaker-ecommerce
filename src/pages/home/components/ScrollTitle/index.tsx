import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, ScrollView } from '@tarojs/components'

export default class ScrollTitle extends Component {

  render () {
    return (
      <ScrollView
        className='header-scroll'
        scrollX
        scrollLeft={0}
      >
        <View className='header-scroll-item header-scroll-item_active'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
        <View className='header-scroll-item'>推荐</View>
      </ScrollView>
    )
  }
}

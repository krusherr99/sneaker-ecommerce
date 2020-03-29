import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import back from './back.png'
import home from './home.png'

export default class CustomNavigation extends Component {

  render() {
    return (
      <View>
        <View className='inaver'>
          <View className='left'>
            <Image className='icon' src={back}></Image>
            <View className='line'></View>
            <Image className='icon' src={home}></Image>
          </View>
          <View className='center'>商品详情</View>
          <View className='right'></View>
        </View>
        <View className='protect-inaver'></View>
      </View>
    )
  }
}

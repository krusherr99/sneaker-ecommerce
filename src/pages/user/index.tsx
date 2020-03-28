import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import MineOrder from './MineOrder'

import avatar from './avatar.png'
import './index.less'

export default class SearchBar extends Component {

  render () {
    return (
      <View className='container'>
        <View className='header'>
          <Image className='header-image' src={avatar}></Image>
          <View className='name'>登录/注册</View>
        </View>
        <View className='item-wrap'>
          <MineOrder />
        </View>
      </View>
    )
  }
}

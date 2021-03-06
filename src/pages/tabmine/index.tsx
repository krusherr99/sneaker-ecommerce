import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import MineOrder from './MineOrder'

import avatar from './images/avatar.png'
import item1 from './images/item1.png'
import item2 from './images/item2.png'
import item3 from './images/item3.png'
import item4 from './images/item4.png'
import right_icon from './images/right_icon.png'
import './index.less'
const item5 = 'https://cdn.poizon.com/node-common/JUU1JUFFJUEyJUU2JTlDJThEQDJ4MTU4MjUyNTczNTk4MA==.png'

export default class SearchBar extends Component {

  navigateTo = (page) => {
    Taro.navigateTo({
      url: `/account/${page}/index`
    })
  }

  render() {
    return (
      <View className='container'>
        <View className='header'>
          <Image className='header-image' src={avatar}></Image>
          <View className='name'>登录/注册</View>
        </View>
        <View className='item-wrap'>

          <MineOrder />

          <View className='container-item' onClick={this.navigateTo.bind(this, 'MyCashPage')}>
            <Image src={item1}></Image>
            <View className='title'>账户</View>
            <Image src={right_icon}></Image>
          </View>

          <View className='container-item'>
            <Image src={item2}></Image>
            <View className='title'>卡卷</View>
            <Image src={right_icon}></Image>
          </View>

          <View className='container-item' onClick={this.navigateTo.bind(this, 'ShippingAddressPage')}>
            <Image src={item3}></Image>
            <View className='title'>地址管理</View>
            <Image src={right_icon}></Image>
          </View>

          <View className='container-item'>
            <Image src={item4}></Image>
            <View className='title'>消息通知</View>
            <Image src={right_icon}></Image>
          </View>

          <View className='container-item'>
            <Image src={item5}></Image>
            <View className='title'>客服中心</View>
            <Image src={right_icon}></Image>
          </View>
        </View>
      </View>
    )
  }
}

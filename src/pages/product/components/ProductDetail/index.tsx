import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.less'

import header from './images/header.png'
import sneaker_story from './images/sneaker_story.png'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import history from './images/history.png'



export default class ProductDetail extends Component {
  render () {
    return (
      <View className='product-detail'>
        <View className='ad'>
          <Image src={header} />
        </View>
        <View className='detail-extra'>
          <View className='wrap-title'>参数</View>
          <View className='extra-list'>
            <View className='extra-list-title'>货号</View>
            <View className='extra-list-info'>553560-116</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>发售价格</View>
            <View className='extra-list-info'>￥599(仅供参考)</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>发售日期</View>
            <View className='extra-list-info'>2019.03.23</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>配色</View>
            <View className='extra-list-info'>黑红</View>
          </View>
        </View>
        <View className='wrap'>
          <Image src={sneaker_story} style={{ height: '38.5px' }} />
          <Image src={pic1} style={{ height: '202px' }} />
          <Image src={history} style={{ height: '148.958px' }} />
          <Image src={pic2} style={{ height: '202px' }} />
          <Image src={pic3} style={{ height: '202px' }} />
          <Image src={pic4} style={{ height: '202px' }} />
        </View>
      </View>
    )
  }
}

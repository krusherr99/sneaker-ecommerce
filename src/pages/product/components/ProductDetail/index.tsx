import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.less'

import header from './header.png'

export default class ProductDetail extends Component {
  render () {
    return (
      <View className='product-detail'>
        <View className='wrap'>
          <Image src={header} />
        </View>
      </View>
    )
  }
}

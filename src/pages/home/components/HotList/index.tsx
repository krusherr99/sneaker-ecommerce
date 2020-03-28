import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import item from './item.jpg'

export default class HotList extends Component {

  render () {
    return (
      <View className='hot-list'>
        <View className='item'>
          <Image className='product-image' src={item}></Image>
        </View>
      </View>
    )
  }
}

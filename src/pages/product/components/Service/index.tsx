import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import item4 from './item4.png'


import './index.less'

export default class Service extends Component {
  render () {
    return (
      <View className='service'>
        <View className='item'>
          <Image src={item1}></Image>
          <Text>正品保障</Text>
        </View>

        <View className='item'>
          <Image src={item2}></Image>
          <Text>多重鉴别</Text>
        </View>

        <View className='item'>
          <Image src={item3}></Image>
          <Text>逐件查验</Text>
        </View>

        <View className='item'>
          <Image src={item4}></Image>
          <Text>售后无忧</Text>
        </View>
      </View>
    )
  }
}

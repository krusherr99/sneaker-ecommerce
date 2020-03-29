import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

export default class Service extends Component {
  render () {
    return (
      <View className='service'>这里是服务</View>
    )
  }
}

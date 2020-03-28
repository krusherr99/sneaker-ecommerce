import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

export default class Header extends Component {
  render() {
    return (
      <View className="fix-header">我是header</View>
    )
  }
}
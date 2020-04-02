import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

interface SplitLineProps {
  lineHeight: number
}

export default class SplitLine extends Component<SplitLineProps> {

  render() {
    const { lineHeight } = this.props
    return (
      <View className='order-split-line' style={{ height: `${lineHeight}rpx` }}></View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View } from '@tarojs/components'

export default class ProductDetail extends Component {
  render () {
    return (
      <View>
        <View className='search-header' style={{ width: '100%', height: '44px', textAlign: 'center', background: '#eeeef3' }}>这里是搜索栏</View>
        <View className='scroll-view'>
          
        </View>
      </View>
    )
  }
}

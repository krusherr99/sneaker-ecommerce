import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import CustomNavigation from '../../components/CustomNavigation'

import './product.less'

export default class Product extends Component {
  config: Config = {
    navigationBarTitleText: '商品详情',
    navigationStyle: 'custom'
  }

  render () {
    return (

      <View id='product'>
        <CustomNavigation />
        <View className='container'>这里是商品详情</View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames';


import './index.less'

import price_arrow from './price_arrow.png'
import size_arrow from './size_arrow.png'

export default class SearchBox extends Component {
  render() {
    return (
      <View className='filters-info'>
        <View className='filter-border-view'>
          <View className='filter-view'>
            <View className='select-sales-view'>销量</View>
            <View className='price-wrap'>
              <View className='price-view'>价格</View>
              <Image className='price-arrow' src={price_arrow}></Image>
            </View>
            <View className='new-view'>新品</View>
            <View className='size-wrap'>
              <View className='size-view'>尺码</View>
              <Image className='size-arrow' src={size_arrow}></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

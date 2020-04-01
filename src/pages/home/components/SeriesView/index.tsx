import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import item from './images/item.png'
import all from './images/all.jpg'

export default class SeriesView extends Component {

  render () {
    return (
      <View className='series-view'>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={item}></Image>
          <View className='series-text'>Air Jordan</View>
        </View>
        <View className='series-cell'>
          <Image className='series-image' src={all}></Image>
          <View className='series-text'>全部</View>
        </View>
      </View>
    )
  }
}

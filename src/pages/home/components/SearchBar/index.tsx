import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Icon } from '@tarojs/components'

import './index.less'

import all from '../../../../static/images/all@3x.png'

export default class Index extends Component {

  render () {
    return (
      <View className='search-view'>
        <View className='search-input'>
          <Icon type='search' size='14'></Icon>
          <View className='search-title'>搜索单品</View>
        </View>
        <Image className='index-series' src={all}></Image>
      </View>
    )
  }
}

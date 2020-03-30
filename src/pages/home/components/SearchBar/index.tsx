import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Icon } from '@tarojs/components'

import './index.less'

import all from '../../../../static/images/all@3x.png'


export default class SearchBar extends Component {

  config: Config = {
    navigationBarTitleText: '搜索'
  }

  handleSearchClick = () => {
    Taro.navigateTo({
      url: '/pages/product/ProductSearchResult/index'
    })
  }

  render () {
    return (
      <View className='search-view'>
        <View className='search-input' onClick={this.handleSearchClick}>
          <Icon type='search' size='14'></Icon>
          <View className='search-title'>搜索单品</View>
        </View>
        <Image className='index-series' src={all}></Image>
      </View>
    )
  }
}

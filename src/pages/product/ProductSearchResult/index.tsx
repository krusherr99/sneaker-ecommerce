import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import SearchBox from './components/SearchBox'

import './index.less'

export default class ProductSearchResult extends Component {
  render () {
    return (
      <View>
        <SearchBox />
      </View>
    )
  }
}

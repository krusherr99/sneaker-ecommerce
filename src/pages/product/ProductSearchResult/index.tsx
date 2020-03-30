import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import SearchBox from './components/SearchBox'
import SearchFilters from './components/SearchFilters'
// import SearchList from './components/SearchList'
import HotList from '../../home/components/HotList/index';

import './index.less'

export default class ProductSearchResult extends Component {
  render() {
    return (
      <View className='max-height'>
        <SearchBox />
        <SearchFilters />
        <View style={{ marginTop: '-8px' }}>
          <HotList />
        </View>
        {/* <SearchList /> */}
      </View>
    )
  }
}

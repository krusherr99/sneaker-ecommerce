import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Input } from '@tarojs/components'


import './index.less'

export default class SearchBox extends Component {
  render() {
    return (
      <View className='search-view'>
        <View className='search-background'>
          <View className='search-view-text'>
            <Icon type='search' size='14px'></Icon>
            <Input className='search-input-title' value={'aj1'}></Input>
          </View>
          <Icon className='search-clear' type='clear' size='14px'></Icon>
        </View>
      </View>
    )
  }
}

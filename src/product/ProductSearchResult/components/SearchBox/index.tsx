import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Input } from '@tarojs/components'
import axios from 'taro-axios'


import './index.less'
import { BaseEventOrig, BaseEventOrigFunction } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'

interface SearchBoxProps {
  updateResultList: (word) => void
  toggleShowResult: () => void
}

export default class SearchBox extends Component<SearchBoxProps> {

  state = {
    
  }

  inputTyping = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    console.log("触发了事件");
    this.props.toggleShowResult()
  }

  onConfirm: BaseEventOrigFunction<InputProps.inputValueEventDetail> = (event) => {

    this.props.updateResultList(event.detail.value)
  }

  render() {
    return (
      <View className='search-view'>
        <View className='search-background'>
          <View className='search-view-text'>
            <Icon type='search' size='14px'></Icon>
            <Input className='search-input-title' placeholder='输入商品名称、货号' onInput={this.inputTyping} onConfirm={this.onConfirm}></Input>
          </View>
          <Icon className='search-clear' type='clear' size='14px'></Icon>
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Input } from '@tarojs/components'
import axios from 'taro-axios'


import './index.less'
import { BaseEventOrig, BaseEventOrigFunction } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'

interface SearchBoxProps {
  updateResultList: (word) => void
}

export default class SearchBox extends Component<SearchBoxProps> {

  state = {
    
  }

  inputTyping = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    // console.log('输入的内容是', e.detail.value);
    // axios.get(`http://rap2.taobao.org:38080/app/mock/243019/search?title=${e.detail.value}`)
    //   .then(resp => {
    //     this.setState({

    //     })
    //   })
    //   .catch(err => { console.log(err); })
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

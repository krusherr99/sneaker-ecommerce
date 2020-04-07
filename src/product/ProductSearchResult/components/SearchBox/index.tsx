import Taro, { Component } from '@tarojs/taro'
import { View, Icon, Input } from '@tarojs/components'
import axios from 'taro-axios'


import './index.less'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'

interface SearchBoxProps {
  updateResultList: (list) => void
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

  onConfirm = () => {
    const { updateResultList } = this.props
    axios.get(`http://localhost:8080/product/test`)
      .then(resp => {
        console.log(resp.data.data);
        updateResultList(resp.data.data.list)
      })
      .catch(err => {
        console.log(err);
      })
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

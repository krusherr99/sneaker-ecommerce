import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import back from './back.png'
import home from './home.png'
import { ITouchEvent } from '@tarojs/components/types/common'

export default class CustomNavigation extends Component {

  // handleNavigateBack = () => {
  //   console.log("left点击了");
  // }

  test = (e: ITouchEvent) => {
    console.log('back icon点击了');
  }

  render() {
    return (
      <View>
        <View className='inaver'>
          <View className='left'>
            <View onClick={(e) => { console.log('点击了aa'); }}>
              <Image className='icon' src={back}></Image>
            </View>
            <View className='line'></View>
            <View>
              <Image className='icon' src={home}></Image>
            </View>
          </View>
          <View className='center'>商品详情</View>
          <View className='right'></View>
        </View>
        <View className='protect-inaver'></View>
      </View>
    )
  }
}

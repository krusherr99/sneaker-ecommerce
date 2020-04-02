import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import item1 from '../../../../static/images/CombinedShape@3x.png'

export default class DeclarationBar extends Component {

  testNavigateTo = () => {
    Taro.navigateTo({
      url: '/order/OrderConfirmPage/index'
    })
  }

  render () {
    return (
      <View className='declaration'  onClick={this.testNavigateTo}>
        <View className='declaration-item'>
          <Image className='declaration-image' src={item1}></Image>
          正品保障
        </View>
        <View className='declaration-item'>
          <Image className='declaration-image' src={item1}></Image>
          逐件查验
        </View>
        <View className='declaration-item'>
          <Image className='declaration-image' src={item1}></Image>
          多重鉴别
        </View>
      </View>
    )
  }
}

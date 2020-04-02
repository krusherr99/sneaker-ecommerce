import Taro, { Component, createSelectorQuery } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class Order extends Component {

  render() {
    return (
      <View>
        <View className='address-info-container'>
          <Image className='location' src="http://cdn.poizon.com/node-common/cGxhY2UxNTgzMjIyMDAwNTgz.svg"></Image>
          <View className='info'>
            <View className='user'>
              <View className='name'>收货人：起个名字好难</View>
              <View className='mobile'>182****7296</View>
              <Image className='arrow' src="http://cdn.poizon.com/node-common/ZW50ZXIxNTgzMzE3MjkxMzI0.svg"></Image>
            </View>
            <View className='address'>河北省石家庄市长安区润园小区</View>
          </View>
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class SplitLine extends Component {

  render() {
    return (
      <View className="order-product">
        <View className='img-container'>
          <Image className="img" src="https://du.hupucdn.com/13fbe234c2280cd1145289e5448cf6a2.png?imageView2/0/w/180/h/180"></Image>
        </View>
        <View className="info">
          <View className="title">Air Jordan Retro High Shadow (2018) 影子</View>
          <View className="sku">
            42
          <Text className="count">
              {`数量x${1}`}
            </Text>
          </View>
          <View className="price">
            <Text className="symbol">¥</Text>{2609}</View>
        </View>
      </View>
    )
  }
}

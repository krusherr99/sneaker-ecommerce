import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'
import CustomNavigation from '../../components/CustomNavigation'

import product1 from './product1.jpg'
import product2 from './product2.jpg'
import right from './right.png'
import './product.less'
import Service from './components/Service'

export default class Product extends Component {
  config: Config = {
    navigationBarTitleText: '商品详情',
    navigationStyle: 'custom'
  }

  render () {
    return (

      <View id='product'>
        <CustomNavigation />
        <View className='container'>
          <View className='product-header'>
            <Swiper
              className='product-swipper'
              indicatorDots={true}
            >
              <SwiperItem className='swiperItem-container'>
                <Image className='min-header-image' src={product1}></Image>
              </SwiperItem>
              <SwiperItem className='swiperItem-container'>
                <Image className='min-header-image' src={product2}></Image>
              </SwiperItem>
            </Swiper>
          <View className='product-title'>
            <Text>Air Jordan 1 Low Black Toe (GS) 黑脚趾</Text>
          </View>
          <View className='product-price'>
            <View className='price-info'>
              <Text className='price-unit'>￥</Text>
              <Text className='price'>1029</Text>
            </View>
          </View>
          </View>
          <View className='product-coupon'>
            <View className='coupon-title'>选择尺码</View>
            <View className='coupon-list'>
              <View className='select-name'>
                <Text>请选择尺码</Text>
              </View>
              <Image className='arrow-right' src={right}></Image>
            </View>
          </View>
          <Service />
        </View>
      </View>
    )
  }
}

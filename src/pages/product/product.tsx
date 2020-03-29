import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'


import CustomNavigation from '../../components/CustomNavigation'

import product1 from './product1.jpg'
import product2 from './product2.jpg'
import right from './right.png'
import select from './select.jpg'
import small_icon from './small_icon.png'
import close from './close.png'
import './product.less'
import Service from './components/Service'
import ProductDetail from './components/ProductDetail'
import { ITouchEvent } from '@tarojs/components/types/common'

export default class Product extends Component {
  config: Config = {
    navigationBarTitleText: '商品详情',
    navigationStyle: 'custom'
  }

  handleClickBuy = (e: ITouchEvent) => {
    console.log(e)
  }

  handleClose = () => {
    console.log('guanbi');
  }

  render() {
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
          <ProductDetail />
          <View className='buy-button-view'>
            <View className='buy' onClick={this.handleClickBuy}>立即购买</View>
          </View>
          <View className='select-mask'>
            <View className='select-header'>
              <View className='header-left'>
                <View className='header-image'>
                  <Image src={select}></Image>
                </View>
                <View className='header-info'>
                  <View className='price'>
                    <Text className='unit'>￥</Text>1019
                  </View>
                  <View className='header-desc'>
                    <Image src={small_icon}></Image>
                    <View className='cover-desc'>请选择商品</View>
                  </View>
                </View>
              </View>
              <View className='header-close-icon'>
                <Image className='close' src={close}></Image>
                <View className='get-seller-flow'>
                  {/* TODO: 字体图标*/}
                  <Text className='iconfont'></Text>
                </View>
              </View>
            </View>
            <View className='select-container'>
              <View className='size-list-wrap'>
                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>

                <View className='select-size-info'>
                  <View className='size'>36</View>
                  <View className='size-price'>￥1179</View>
                </View>


              </View>
            </View>
            <View>
              <View className='buy-button'>
                <View className='button-view left'>
                  <View className='button-left'>
                    <View className='price'>￥1069</View>
                  </View>
                  <View className='button-right'>立即购买</View>
                </View>
                <View className='button-view right'>
                  <View className='button-left'>
                    <View className='price'>￥1189</View>
                  </View>
                  <View className='button-right'>闪电直发</View>
                </View>
              </View>
            </View>
          </View>
          <View className='mask'></View>
        </View>
      </View>
    )
  }
}

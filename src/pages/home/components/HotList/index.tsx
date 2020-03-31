import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import item from './item.jpg'
import { IndexState } from '../..'

interface HotListProps extends Partial<IndexState> { }

export default class HotList extends Component<HotListProps> {
  handleClick = () => {
    Taro.navigateTo({
      url: '/pages/product/product'
    })
  }

  render() {
    const { list } = this.props
    return (
      <View className='hot-list'>
        {
          list!.map((product) => {
            return (
              <View className='product' onClick={this.handleClick}>
                <Image className='product-image' src={item}></Image>
                <View className='product-title'>{product.title}</View>
                <View className='price-info'>
                  <View className='unit-price-view'>
                    <View className='unit'>￥</View>
                    <View className='price'>{product.price}</View>
                  </View>
                  <View className='sold-number'>`${product.soldNumber}人付款`</View>
                </View>
              </View>
            )
          })
        }
{/* 
        <View className='product'>
          <Image className='product-image' src={item}></Image>
          <View className='product-title'>Air Jordan 11 康扣</View>
          <View className='price-info'>
            <View className='unit-price-view'>
              <View className='unit'>￥</View>
              <View className='price'>2279</View>
            </View>
            <View className='sold-number'>5957人付款</View>
          </View>
        </View>

        <View className='product'>
          <Image className='product-image' src={item}></Image>
          <View className='product-title'>Air Jordan 11 康扣</View>
          <View className='price-info'>
            <View className='unit-price-view'>
              <View className='unit'>￥</View>
              <View className='price'>2279</View>
            </View>
            <View className='sold-number'>5957人付款</View>
          </View>
        </View>

        <View className='product'>
          <Image className='product-image' src={item}></Image>
          <View className='product-title'>Air Jordan 11 康扣</View>
          <View className='price-info'>
            <View className='unit-price-view'>
              <View className='unit'>￥</View>
              <View className='price'>2279</View>
            </View>
            <View className='sold-number'>5957人付款</View>
          </View>
        </View> */}
      </View>
    )
  }
}

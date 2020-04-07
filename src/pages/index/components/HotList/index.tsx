import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Image } from '@tarojs/components'

import { IndexState } from '../..'

const imageSrc = 'https://du.hupucdn.com/30cd34304eb07e0431f9090e3d433c4d.png?imageView2/0/w/300/h/300'

interface HotListProps extends Partial<IndexState> { }

export default class HotList extends Component<HotListProps> {
  handleClick = (id) => {
    Taro.navigateTo({
      url: `/product/product?id=${id}`
    })
  }

  render() {
    const { list } = this.props
    return (
      <View className='hot-list'>
        {
          list!.map((product) => {
            return (
              <View key={product.id} className='product' onClick={this.handleClick.bind(this, product.id)}>
                <Image className='product-image' src={product.indexImage}></Image>
                <View className='product-title'>{product.title}</View>
                <View className='price-info'>
                  <View className='unit-price-view'>
                    <View className='unit'>￥</View>
                    <View className='price'>{product.price}</View>
                  </View>
                  <View className='sold-number'>{`${product.soldNum}人付款`}</View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View } from '@tarojs/components'

import CategoryType from '../components/CategoryType'
import CategoryContent from '../components/CategoryContent'

interface ProductDetailProps {}
interface ProductDetailState {
  catId: number
}

export default class ProductDetail extends Component<ProductDetailProps, ProductDetailState> {
  state = {
    catId: 0
  }

  selectCategoryTap = (catId: number) => {
    console.log('点击了');
    this.setState({ catId }, () => { this.state.catId })
  }

  render () {
    return (
      <View>
        <View className='search-header' style={{ width: '100%', height: '44px', textAlign: 'center', background: '#eeeef3' }}>这里是搜索栏</View>
        <View className='scroll-view'>
          <CategoryType 
            selectCategoryTap={this.selectCategoryTap}
          />
          <CategoryContent />
        </View>
      </View>
    )
  }
}

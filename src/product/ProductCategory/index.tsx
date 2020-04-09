import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Icon } from '@tarojs/components'

import CategoryType from '../components/CategoryType'
import CategoryContent from '../components/CategoryContent'

interface ProductCategoryProps { }
export interface ProductCategoryState {
  catId: number
}

export default class ProductCategory extends Component<ProductCategoryProps, ProductCategoryState> {
  state = {
    catId: 0
  }

  selectCategoryTap = (catId: number) => {
    this.setState({ catId })
  }

  render() {
    const { catId } = this.state
    return (
      <View>
        <View className='search-header'>
          <View className='input-wrapper'>
            <Icon type='search' size='14' />
            <View className='search-input'>搜索商品</View>
          </View>
        </View>
        <View className='scroll-view'>
          <CategoryType
            selectCategoryTap={this.selectCategoryTap}
            catId={catId}
          />
          <CategoryContent />
        </View>
      </View>
    )
  }
}

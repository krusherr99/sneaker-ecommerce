import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View } from '@tarojs/components'

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
    console.log('点击了');
    this.setState({ catId }, () => { console.log(this.state.catId); })
  }

  render() {
    const { catId } = this.state
    return (
      <View>
        <View className='search-header' style={{ width: '100%', height: '44px', textAlign: 'center', background: '#eeeef3' }}>这里是搜索栏</View>
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

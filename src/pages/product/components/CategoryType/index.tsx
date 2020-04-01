import Taro, { Component } from '@tarojs/taro'
import './index.less'
import { View, ScrollView } from '@tarojs/components'
import catList from './data'
import classNames from 'classnames';
import { ProductCategoryState } from '../../ProductCategory';


interface CategoryTypeProps extends ProductCategoryState {
  selectCategoryTap: (catId: number) => any
}


export default class CategoryType extends Component<CategoryTypeProps> {

  selectLeftTap = (catId) => {
    this.props.selectCategoryTap(catId)
  }

  render() {
    const { catId } = this.props
    return (
      <ScrollView 
        className='left-scroll-view'  
        scrollY
      >
        <View className='scroll-view-content'>
          {
            catList.map((cat) => {
              return (
                <View className='left-item' onClick={this.selectLeftTap.bind(this, cat.catId)}>
                  <View className={classNames('item-container', {'select-container': cat.catId === catId})}>{cat.catName}</View>
                  <View className='bottem-line'></View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

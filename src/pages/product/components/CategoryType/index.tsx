import Taro, { Component } from '@tarojs/taro'
import './index.less'
import { View, ScrollView } from '@tarojs/components'
import catList from './data'
import classNames from 'classnames';


interface CategoryTypeProps {
  selectCategoryTap: (catId: number) => any
}


export default class CategoryType extends Component<CategoryTypeProps> {

  selectLeftTap = (catId) => {
    console.log('点击了', catId);
  }

  render() {
    const { selectCategoryTap } = this.props
    return (
      <ScrollView 
        className='left-scroll-view'  
        scrollY
      >
        <View className='scroll-view-content'>
          {
            catList.map((cat) => {
              return (
                <View className='left-item' onClick={selectCategoryTap(cat.catId)}>
                  <View className={classNames('item-container', {'select-container': cat.catName === '品牌'})}>{cat.catName}</View>
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

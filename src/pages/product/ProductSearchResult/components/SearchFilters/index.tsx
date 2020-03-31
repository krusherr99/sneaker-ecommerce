import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames';


import './index.less'

import price_arrow_none from './images/price_arrow_none.png'
import price_arrow_up from './images/price_arrow_up.png'
import price_arrow_down from './images/price_arrow_down.png'
import size_arrow_up from './images/size_arrow_up.png'
import size_arrow_down from './images/size_arrow_down.png'
import { ProductSearchResultState, SearchFilterTap, SortType } from '../..';

const togglePriceArrow = (filterPriceUp) => {
  switch(filterPriceUp) {
    case -1: return price_arrow_none;
    case 0: return price_arrow_up;
    case 1: return price_arrow_down
  }
}

interface SearchBoxProps extends Partial<ProductSearchResultState> {
  searchFilterTap: SearchFilterTap
}

export default class SearchFilters extends Component<SearchBoxProps> {

  searchFilterTap = (sortType: SortType) => {
    this.props.searchFilterTap(sortType)
  }

  render() {
    let { sortType, selectSizeString, selectSize, filterPriceUp } = this.props
    let size_arrow = selectSize ? size_arrow_up : size_arrow_down
    let price_arrow = togglePriceArrow(filterPriceUp)

    return (
      <View className='filters-info'>
        <View className='filter-border-view'>
          <View className='filter-view' data-id={1}>
            <View className={classNames('sales-view', { 'select': sortType === 1 })} onClick={this.searchFilterTap.bind(this, 1)}>销量</View>
            <View className='price-wrap' onClick={this.searchFilterTap.bind(this, 2)}>
              <View className={classNames('price-view', { 'select': sortType === 2 })}>价格</View>
              <Image className='price-arrow' src={price_arrow}></Image>
            </View>
            <View className={classNames('new-view', { 'select': sortType === 3 })} onClick={this.searchFilterTap.bind(this, 3)}>新品</View>
            <View className='size-wrap' onClick={this.searchFilterTap.bind(this, 4)}>
              <View
                className={classNames('size-view', { 'select': selectSizeString !== '全部' })}
              >
                {
                  selectSizeString === '全部'
                  ? '尺码'
                  : selectSizeString
                }
              </View>
              <Image className='size-arrow' src={size_arrow}></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

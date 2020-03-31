import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames';


import './index.less'

import price_arrow from './images/price_arrow.png'
import size_arrow_up from './images/size_arrow_up.png'
import size_arrow_down from './images/size_arrow_down.png'
import { ProductSearchResultState } from '../..';



interface SearchBoxProps extends ProductSearchResultState {
  toggleSales: (selectSales: boolean) => void
  toggleSize: (selectSize: boolean) => void
  togglePrice: (selectSize: boolean) => void
  toggleNew: (selectSize: boolean) => void
}

export default class SearchFilters extends Component<SearchBoxProps> {

  

  toggleSales = () => {
    const { toggleSales } = this.props
    toggleSales(!this.props.selectMap.selectSales)
  }

  toggleSize = () => {
    const { toggleSize } = this.props
    toggleSize(!this.props.selectMap.selectSize)
  }

  togglePrice = () => {
    const { togglePrice } = this.props
    togglePrice(!this.props.selectMap.selectPrice)
  }

  toggleNew = () => {
    const { toggleNew } = this.props
    toggleNew(!this.props.selectMap.selectNew)
  }


  

  render() {
    let { selectMap: { selectSales, selectNew, selectPrice, selectSize }, selectSizeString } = this.props
    let size_arrow = selectSize ? size_arrow_up : size_arrow_down
    return (
      <View className='filters-info'>
        <View className='filter-border-view'>
          <View className='filter-view' data-id={1}>
            <View className={classNames('sales-view', { 'select': selectSales })} onClick={this.toggleSales}>销量</View>
            <View className='price-wrap' onClick={this.togglePrice}>
              <View className={classNames('price-view', { 'select': selectPrice })}>价格</View>
              <Image className='price-arrow' src={price_arrow}></Image>
            </View>
            <View className={classNames('new-view', { 'select': selectNew })} onClick={this.toggleNew}>新品</View>
            <View className='size-wrap' onClick={this.toggleSize}>
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

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames';


import './index.less'

import price_arrow from './price_arrow.png'
import size_arrow from './size_arrow.png'
import { ProductSearchResultState } from '../..';

interface SearchBoxProps extends ProductSearchResultState {
  toggleSelectSales: (selectSales: boolean) => void
  toggleSize: (selectSize: boolean) => void
}

export default class SearchBox extends Component<SearchBoxProps> {

  toggleSales = () => {
    const { toggleSelectSales } = this.props
    console.log(this.props.selectMap.selectSales);
    toggleSelectSales(!this.props.selectMap.selectSales)
  }

  toggleSize = () => {
    const { toggleSize } = this.props
    toggleSize(!this.props.selectMap.selectSize)
  }

  render() {
    let { selectSales, selectNew, selectPrice, selectSize } = this.props.selectMap
    return (
      <View className='filters-info'>
        <View className='filter-border-view'>
          <View className='filter-view'>
            <View className={classNames('sales-view', { 'select': selectSales })} onClick={this.toggleSales}>销量</View>
            <View className='price-wrap'>
              <View className={classNames('price-view', { 'select': selectPrice })}>价格</View>
              <Image className='price-arrow' src={price_arrow}></Image>
            </View>
            <View className={classNames('new-view', { 'select': selectNew })}>新品</View>
            <View className='size-wrap' onClick={this.toggleSize}>
              <View className={classNames('size-view', { 'select': selectSize })}>尺码</View>
              <Image className='size-arrow' src={size_arrow}></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

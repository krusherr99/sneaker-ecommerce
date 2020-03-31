import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import SearchBox from './components/SearchBox'
import SearchFilters from './components/SearchFilters'
// import SearchList from './components/SearchList'
import HotList from '../../home/components/HotList/index';

import './index.less'
import classNames from 'classnames';
import { ITouchEvent } from '@tarojs/components/types/common';

const sizeList = ["35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45", "45.5", "46", "46.5", "47", "47.5", "48", "48.5", "全部"]

interface ProductSearchResultProps { }
export interface ProductSearchResultState {
  selectMap: {
    selectSales: boolean;
    selectPrice: boolean;
    selectNew: boolean;
    selectSize: boolean;
  },
  selectSizeString: string;
  filterPriceUp: number;
}

export default class ProductSearchResult extends Component<ProductSearchResultProps, ProductSearchResultState> {

  state: ProductSearchResultState = {
    selectMap: {
      selectSales: false,
      selectPrice: false,
      selectNew: false,
      selectSize: false
    },
    selectSizeString: '全部',
    filterPriceUp: -1
  }

  toggleSales = (selectSales: boolean) => {
    const state = this.state
    state.selectMap.selectPrice = false
    state.selectMap.selectNew = false

    state.selectMap.selectSales = selectSales
    this.setState(state)
  }

  togglePrice = (selectPrice: boolean) => {
    const state = this.state
    state.selectMap.selectSales = false
    state.selectMap.selectNew = false

    state.selectMap.selectPrice = selectPrice
    this.setState(state)
  }

  toggleNew = (selectNew: boolean) => {
    const state = this.state
    state.selectMap.selectSales = false
    state.selectMap.selectPrice = false

    state.selectMap.selectNew = selectNew
    this.setState(state)
  }

  toggleSize = (selectSize: boolean) => {
    const state = this.state
    state.selectMap.selectSize = selectSize
    this.setState(state)
  }

  selectSizeTap = (selectSize: string) => {
    let state = this.state
    state.selectSizeString = selectSize
    this.setState(state)
  }

  render() {
    let { selectMap, selectSizeString } = this.state
    let { selectSize } = selectMap
    return (

      <View className='max-height'>
        <SearchBox />
        <SearchFilters
          selectMap={selectMap}
          toggleSales={this.toggleSales}
          toggleSize={this.toggleSize}
          togglePrice={this.togglePrice}
          toggleNew={this.toggleNew}
          selectSizeString={selectSizeString}
        />
        {
          selectSize &&
          <View className='bg_screen'>
            <View className='size-pop-view'>
              {
                sizeList.map((item: string) => {
                  const isSelect = item === selectSizeString
                  return (
                    <View className='size-flex-view'>
                      <View
                        className={classNames('size-item', { 'size-item-select': isSelect })}
                        onClick={this.selectSizeTap.bind(this, item)}
                      >
                        {item}
                      </View>
                    </View>
                  )
                })
              }
            </View>
          </View>
        }
        <View style={{ marginTop: '-8px' }}>
          <HotList />
        </View>
        {/* <SearchList /> */}
      </View>
    )
  }
}

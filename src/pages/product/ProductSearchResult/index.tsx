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

export type SortType = 1 | 2 | 3 | 4
export type SearchFilterTap = (sortType: SortType) => void

interface ProductSearchResultProps { }
export interface ProductSearchResultState {
  sortType: SortType;
  selectSize: boolean;
  selectSizeString: string;
  filterPriceUp: number;
}

export default class ProductSearchResult extends Component<ProductSearchResultProps, ProductSearchResultState> {

  state: ProductSearchResultState = {
    sortType: 1,
    selectSize: false,
    selectSizeString: '全部',
    filterPriceUp: -1
  }

  searchFilterTap = (sortType: SortType) => {
    let { selectSize } = this.state
    sortType === 4 && (selectSize = !selectSize)
    this.setState({ sortType, selectSize })
  }

  selectSizeTap = (selectSize: string) => {
    let state = this.state
    state.selectSizeString = selectSize
    this.setState(state)
  }

  render() {
    const {  selectSizeString, selectSize} = this.state
    return (
      <View className='max-height'>
        <SearchBox />
        <SearchFilters
          searchFilterTap={this.searchFilterTap}
          selectSize={this.state.selectSize}
          selectSizeString={selectSizeString}
          sortType={this.state.sortType}
          filterPriceUp={this.state.filterPriceUp}
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

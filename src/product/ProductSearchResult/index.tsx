import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import SearchBox from './components/SearchBox'
import SearchFilters from './components/SearchFilters'
import SearchList from './components/SearchList'
import HotList from '../../pages/index/components/HotList'
import SearchWrap from './components/SearchWarp'

import './index.less'
import classNames from 'classnames';

import { data } from './mock/test'
const sizeList = ["35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45", "45.5", "46", "46.5", "47", "47.5", "48", "48.5", "全部"]

const toggleFilterPriceUp = (filterPriceUp: FilterPriceUp): FilterPriceUp => {
  switch (filterPriceUp) {
    case -1: return 0;
    case 0: return 1;
    case 1: return 0
  }
}

export type SortType = 1 | 2 | 3 | 4
export type FilterPriceUp = -1 | 0 | 1
export type SearchFilterTap = (sortType: SortType) => void
type SearchWord = {
  id: number;
  word: string;
  highlight: string;
}

export type ResultItem = {
  id: number;
  price: number;
  soldNum: number;
  title: string;
  indexImage: string;
}

interface ProductSearchResultProps { }
export interface ProductSearchResultState {
  sortType: SortType;
  selectSize: boolean;
  selectSizeString: string;
  filterPriceUp: FilterPriceUp;
  searchWordList: SearchWord[];
  resultList: ResultItem[];
}

export default class ProductSearchResult extends Component<ProductSearchResultProps, ProductSearchResultState> {

  state: ProductSearchResultState = {
    sortType: 1,
    selectSize: false,
    selectSizeString: '全部',
    filterPriceUp: -1,
    searchWordList: [],
    resultList: []
  }

  searchFilterTap = (sortType: SortType) => {
    let { selectSize, filterPriceUp } = this.state
    sortType === 1 && (filterPriceUp = -1)
    sortType === 2 && (filterPriceUp = toggleFilterPriceUp(filterPriceUp))
    sortType === 3 && (filterPriceUp = -1)
    if (sortType === 4) {
      this.setState({ selectSize: !selectSize })
      return
    }
    // sortType === 4 && (selectSize = !selectSize) && (return)
    console.log(filterPriceUp);
    this.setState({ sortType, selectSize, filterPriceUp })
  }

  selectSizeTap = (selectSizeString: string) => {
    let { selectSize } = this.state
    selectSize = !selectSize
    this.setState({ selectSizeString, selectSize })
  }

  updateResultList = (list) => {
    this.setState({
      resultList: list
    })
  }


  render() {
    const { selectSizeString, selectSize } = this.state
    // const { searchWordList } = this.state

    const { list: searchWordList } = data
    // console.log(searchWordList);
    return (
      <View className='max-height'>
        <SearchBox updateResultList={this.updateResultList} />
        {/* <SearchWrap /> */}

        {/*
          searchWordList.map(item => {
            // console.log('')
            return (
              <View className="search-list" >
                <View className="list-cell">{item.word}</View>
                <View className="list-line"></View>
              </View>
            )
          })
        */}

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
        <View style={{ marginTop: '-8px' }}></View>
        <HotList />
        {/* <SearchList />  */}
      </View>
    )
  }
}

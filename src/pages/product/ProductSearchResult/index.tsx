import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import SearchBox from './components/SearchBox'
import SearchFilters from './components/SearchFilters'
// import SearchList from './components/SearchList'
import HotList from '../../home/components/HotList/index';

import './index.less'
import classNames from 'classnames';

const sizeList = ["35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45", "45.5", "46", "46.5", "47", "47.5", "48", "48.5", "全部"]

interface ProductSearchResultProps { }
export interface ProductSearchResultState {
  selectMap: {
    selectSales?: boolean;
    selectPrice?: boolean;
    selectNew?: boolean;
    selectSize?: boolean;
  }
}

export default class ProductSearchResult extends Component<ProductSearchResultProps, ProductSearchResultState> {

  state: ProductSearchResultState = {
    selectMap: {
      selectSales: false,
      selectPrice: false,
      selectNew: false,
      selectSize: false
    }
  }

  toggleSelectSales = (selectSales: boolean) => {
    this.setState({ selectMap: {selectSales: selectSales}  })
  }



  render() {
    let { selectMap } = this.state
    return (
      
      <View className='max-height'>
        <SearchBox />
        <SearchFilters selectMap={selectMap} toggleSelectSales={this.toggleSelectSales} />
        <View className='bg_screen'>
          <View className='size-pop-view'>
            {
              sizeList.map((item: string) => {
                const all = item === '全部'
                return (
                  <View className='size-flex-view'>
                    <View className={classNames('size-item', { 'size-all': all })}>{item}</View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={{ marginTop: '-8px' }}>
          <HotList />
        </View>
        {/* <SearchList /> */}
      </View>
    )
  }
}

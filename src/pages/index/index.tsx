import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtLoadMore } from 'taro-ui'
import SearchBar from './components/SearchBar'
import ScrollTitle from './components/ScrollTitle'
import DeclarationBar from './components/DeclarationBar'
import SeriesView from './components/SeriesView'


import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'
import HotList from './components/HotList'
import LoadMore from '../../components/LoadMore'
import axios from 'taro-axios'
import { initAddress } from '../../actions/address'



// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  },
  address: {
    addressId: number,
    addressList: Array<any>
  }
}

type PageDispatchProps = {
  initAddress: () => any;
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

type Product = {
  id: number;
  title: string;
  price: number;
  soldNum: number;
  indexImage: string;
}

interface IndexProps { }
export interface IndexState {
  page: number;
  loading: boolean;
  hasMore: boolean;
  list: Product[]
}

@connect(({ address }) => ({
  address
}), (dispatch) => ({
  initAddress: () => {
    dispatch(initAddress())
  }
}))
class Index extends Component<IndexProps, IndexState> {

  /**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state: IndexState = {
    page: 1,
    loading: false,
    hasMore: true,
    list: []
  }

  componentWillMount() {
    // 重定向
    // Taro.redirectTo({ url: '/product/ProductSearchResult/index' })
    // Taro.redirectTo({ url: '/product/product' })
    // Taro.redirectTo({ url: '/account/ShippingAddressPage/index' })
    // Taro.redirectTo({ url: '/pages/register/index' })
    // Taro.redirectTo({ url: '/pages/login/index' })
    // Taro.redirectTo({ url: '/order/OrderConfirmPage/index' })
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/product?page=${this.state.page}`)
      .then(resp => {
        const { list, nextPage, hasNextPage } = resp.data.data
        // setTimeout(() => {
          this.setState({
            list: list,
            page: nextPage,
            hasMore: hasNextPage,
            // loading: false
          })
        // }, 1000)
      })
      .catch(err => {
        console.log(err);
      })
    this.props.initAddress()
  }

  loadMore = () => {
    let { list: preList, hasMore } = this.state
    if(!hasMore) { 
      return
    }
    this.setState({ loading: true })
    axios.get(`http://localhost:8080/product?page=${this.state.page}`)
      .then(resp => {
        const { list, nextPage, hasNextPage } = resp.data.data
        setTimeout(() => { this.setState({ 
          list: preList.concat(list), 
          page: nextPage,
          hasMore: hasNextPage,
          loading: false 
        }) }, 1000)
      })
      .catch(err => {
        console.log(err);
        setTimeout(() => { this.setState({ loading: false }) }, 1000)
      })
  }


  render() {
    const { loading, hasMore, list } = this.state
    return (
      <View className='main'>
        <View className='fix-header'>
          <SearchBar />
          <ScrollTitle />
        </View>
        <ScrollView
          scrollY
          onScrollToLower={this.loadMore}
          className='scroll-view'
        >
          <View className='content'>
            <Swiper
              className='swipper-container'
              indicatorDots //是否显示面板指示点
              indicatorActiveColor='#fff' // 选中的指示点颜色
              indicatorColor='#a0d1d4' // 未选中的指示点颜色
              autoplay
            >
              <SwiperItem>
                <Image className='slide-image' src='https://du.hupucdn.com/news_byte381112byte_5cfb7dc89ccdac03f4750ce35fe02a7f_w900h300.png'></Image>
              </SwiperItem>
              <SwiperItem>
                <Image className='slide-image' src='https://du.hupucdn.com/FlgI7w6eM2As2UKcFxOsDBLUw-10'></Image>
              </SwiperItem>
            </Swiper>
            <DeclarationBar />
            <SeriesView />
            <HotList list={list} />
          </View>
          <LoadMore
            loading={loading}
            hasMore={hasMore}
          />
        </ScrollView>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>

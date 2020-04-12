import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Text } from '@tarojs/components'
import classNames from 'classnames'

import CustomNavigation from '../components/CustomNavigation'


import right from './images/right.png'
import small_icon from './images/small_icon.png'
import close from './images/close.png'
import './product.less'
import Service from './components/Service'
import ProductDetail from './components/ProductDetail'
import { ITouchEvent } from '@tarojs/components/types/common'
import axios from 'taro-axios'
import { getProductById } from '../pages/index/api/index'

export interface ProductImage {
  url: string,
  sort: number
}

export interface Detail {
  id: number;
  price: number;
  soldNum: number;
  title: string;
  productNumber: string;
  authPrice: number,
  sellDate: number,
  color: string,
}

interface sizeItem {
  skuId: number,
  spuId: number,
  value: number,
  price: number,
  isSelect: boolean
}


interface ProductProps { }
interface ProductState {
  showPopup: boolean;
  selectItem: sizeItem;
  sizeList: Array<any>;
  detail: Detail,
  imageList: Array<ProductImage>
}


export default class Product extends Component<ProductProps, ProductState> {
  config: Config = {
    navigationBarTitleText: '商品详情',
    navigationStyle: 'custom'
  }

  state: ProductState = {
    showPopup: false,
    sizeList: [],
    selectItem: {
      spuId: 0,
      skuId: 0,
      value: 0,
      price: 0,
      isSelect: false
    },
    detail: {
      id: 0,
      price: 0,
      soldNum: 0,
      title: '',
      productNumber: '',
      authPrice: 0,
      sellDate: 0,
      color: 'string',
    },
    imageList: []
  }

  handleShowPopup = (e: ITouchEvent) => {
    this.setState({ showPopup: true })
  }

  handleClose = () => {
    this.setState({ showPopup: false })
  }

  handleSelect = (item: sizeItem) => {
    console.log(item)
    item.isSelect = true
    this.setState({ selectItem: item })
  }

  handleBuy = () => {
    const { skuId } = this.state.selectItem
    const isLogin = Taro.getStorageSync('isLogin')
    isLogin
      ?
      Taro.navigateTo({
        url: `/order/OrderConfirmPage/index?skuId=${skuId}`
      })
      :
      Taro.showToast({
        title: '请先登录',
        duration: 1500,
        icon: 'none'
      }).then(resp => {
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/login/index'
          })
        }, 1500)
      })
  }

  componentDidMount() {
    axios.get(`http://172.20.10.11:8080/product/${this.$router.params.id}`)
      .then(resp => {
        const { sizeList, imageList, ...detail } = resp.data.data
        sizeList.forEach(item => {
          item['isSelect'] = false;
        })
        console.log(sizeList);
        this.setState({ sizeList, detail, imageList })
      })
      .catch(err => { console.log(err); })
  }

  render() {
    let { showPopup, selectItem, sizeList, detail, imageList } = this.state
    return (
      <View id='product'>
        <CustomNavigation />
        <View className='container'>
          <View className='product-header'>

            <Swiper
              className='product-swipper'
              indicatorDots={true}
            >
              {
                imageList.map(item => {
                  return (
                    <SwiperItem key={item.url} className='swiperItem-container'>
                      <Image className='min-header-image' src={item.url}></Image>
                    </SwiperItem>
                  )
                })
              }
            </Swiper>

            <View className='product-title'>
              <Text>{detail.title}</Text>
            </View>
            <View className='product-price'>
              <View className='price-info'>
                <Text className='price-unit'>￥</Text>
                <Text className='price'>{selectItem.price || detail.price}</Text>
              </View>
            </View>
          </View>
          <View className='product-coupon'>
            <View className='coupon-title'>选择尺码</View>
            <View className='coupon-list' onClick={this.handleShowPopup}>
              <View className='select-name'>
                <Text>
                  {selectItem.isSelect ? `已选 ${selectItem.value}` : `共有${sizeList.length}个尺码可选`}
                </Text>
              </View>
              <Image className='arrow-right' src={right}></Image>
            </View>
          </View>

          <Service />

          <ProductDetail detail={detail} imageList={imageList} />

          <View style={{ marginBottom: '136rpx' }}></View>
          <View className='buy-button-view'>
            <View className='buy' onClick={this.handleShowPopup}>立即购买</View>
          </View>

          <View className={classNames('select-mask', { 'show': showPopup })}>
            <View className='select-header'>
              <View className='header-left'>
                <View className='header-image'>
                  <Image src="https://du.hupucdn.com/FlCpOh0H4ssWxdwLz1aUztdRV2vg"></Image>
                </View>
                <View className='header-info'>
                  <View className='price'>
                    <Text className='unit'>￥</Text>
                    {selectItem.value ? selectItem.price : '--'}
                  </View>
                  <View className='header-desc'>
                    <Image src={small_icon}></Image>
                    <View className='cover-desc'>
                      {selectItem.value ? `已选 ${selectItem.value}` : '请选择商品'}
                    </View>
                  </View>
                </View>
              </View>
              <View className='header-close-icon' onClick={this.handleClose}>
                <Image className='close' src={close}></Image>
                <View className='get-seller-flow'>
                  <Text className='iconfont icon-question'></Text>
                  闪电直发
                </View>
              </View>
            </View>

            <View className='select-container'>
              <View className='size-list-wrap'>
                {
                  sizeList.map((item) => {
                    return (
                      <View
                        key={item.skuId}
                        className={classNames('select-size-info', { 'isSelect': item.value === selectItem.value })}
                        onClick={this.handleSelect.bind(this, item)}
                      >
                        <View className='size'>{item.value}</View>
                        <View className='size-price'>￥{item.price}</View>
                      </View>
                    )
                  })
                }
              </View>
            </View>
            {
              selectItem.value &&
              <View className='buy-button'>
                <View className='button-view left' onClick={this.handleBuy}>
                  <View className='button-left'>
                    <View className='price'>￥{selectItem.price}</View>
                  </View>
                  <View className='button-right'>立即购买</View>
                </View>
                <View className='button-view right' onClick={this.handleBuy}>
                  <View className='button-left'>
                    <View className='price'>￥{selectItem.price + 20}</View>
                  </View>
                  <View className='button-right'>闪电直发</View>
                </View>
              </View>
            }
          </View>
          {
            showPopup && <View className='mask' onClick={this.handleClose}></View>
          }
        </View>
      </View>
    )
  }
}

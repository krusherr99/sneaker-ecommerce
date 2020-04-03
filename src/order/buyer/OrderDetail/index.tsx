import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import './index.less'

import SplitLine from '../../components/SplitLine'
import Product from '../../components/Product'
import classNames from 'classnames';


const paymentList = [
  {
    amountTitle: '顺丰速运',
    amount: 23
  },
  {
    amountTitle: '待支付',
    amount: 2712
  },
]

const orderInfoList = [
  {
    mainText: '订单编号',
    subText: '110100442555407530',
  },
  {
    mainText: '创建时间',
    subText: '2020-04-02 17:48:19',
  }
]

const buttonList = [
  {
    text: '取消订单',
    type: 0
  },
  {
    text: '立即付款',
    type: 1
  }
]

export default class OrderDetail extends Component {

  render() {
    return (
      <View>
        <View className='container-view'>
          <View className="status-area-view">
            <View className="status-text-view">
              <View className="status-text">您有待付款订单</View>
              <View className="status-sub-text">请在8分钟内付款，超时订单将自动关闭</View>
            </View>
            <View className="time-view">
              <View className="time-clock-text">7:55</View>
              <View className="time-text">支付剩余时间</View>
            </View>
          </View>
          <View className="address-view ">
            <Image className="address-icon " src="//cdn.poizon.com/node-common/cGxhY2UxNTgzMjIyMDAwNTgz.svg"></Image>
            <View className="name-phone-detail-text ">
              <View className="name-phone-text ">
                <View>收货人: 起名字好难啊</View>
                <View>182****7296</View>
              </View>
              <View className="address-detail-text ">河北省石家庄市长安区润园小区</View>
            </View>
          </View>
          <SplitLine lineHeight={16} />
          <Product />
          <SplitLine lineHeight={16} />
          <View className="payment-detail-container ">
            {
              paymentList.map(item => {
                return (
                  <View className="item">
                    <View className="title">{item.amountTitle}</View>
                    <View className="price ">
                      {/* <Text className="symbol ">{{ ''+(item[$orig].isPlus ? '' : '-') + '¥' }}</Text> */}
                      <Text className="symbol ">¥</Text>
                      {item.amount}</View>
                  </View>
                )
              })
            }
          </View>
          <View className="payment-total-container ">
            <View className="layble ">合计支付</View>
            <View className="content ">
              <View className="symbol ">¥</View>
              <View className="sum ">2712</View>
            </View>
          </View>
          <SplitLine lineHeight={16} />
          <View className="order-info-view ">
            {
              orderInfoList.map((item, index) => {
                return (
                  <View className="list-row-between-view order-info-container ">
                    <View className="order-info-text ">{item.mainText}</View>
                    <View className="order-info-sub-text ">{item.subText}</View>
                    {
                      index === 0 && <View className="order-no-copy ">复制</View>
                    }
                  </View>
                )
              })
            }
          </View >
          <View className={classNames('bottom-space ', { 'bottom-space-fix-iphonex': false })}></View>
          <View className="{{['fix-bottom-view ',isIpx?'fix-iphonex':'']}}">
            <View className="bottom-view ">
              <Button className="kf-buton "></Button>
              <View className={classNames('button-list ', { 'iphonex-button-list': false })}>
                {
                  buttonList.map(item => {
                    return <View className={classNames('oper-button ', { 'iphonex-btn-item btn-item': false })} key={item.type}>
                      {item.text}
                    </View>
                  })
                }
              </View>
            </View>
          </View>
        </View >
      </View >
    )
  }
}

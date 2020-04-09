import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import success from  './ic-pay-success.png'
import './index.less'

export default class BuyPaySuccessPage extends Component {

  render() {
    return (
      <View className="">
        <View className="container ">
          <Image className="pay-success-icon " src={success}></Image>
          <View className="pay-success-text ">支付成功</View>
          <View className="btns-wrap ">

            {/* <View bindtap="__e" className="go-detail " data-event-opts="{{[ [ 'tap',[ [ 'goOrder',['$event'] ] ] ] ]}}">查看订单</View> */}
            <View className="go-detail " >查看订单</View>


            {/* <View bindtap="__e" className="go-index " data-event-opts="{{[ [ 'tap',[ [ 'goIndex',['$event'] ] ] ] ]}}">继续逛</View> */}
            <View className="go-index ">继续逛</View>
          </View>
        </View>
      </View>

    )
  }
}

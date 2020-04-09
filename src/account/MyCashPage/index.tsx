import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.less'
import leftIcon from './ic_cash_detail.png'
import rightIcon from './arrowright.png'

export default class ShippingAddressPage extends Component {

  render() {
    return (
      <View className="account">
        <View className="info">
          <View className="balance">
            <Text className="label">¥</Text>
            <Text className="cash">{2699}</Text>
          </View>
          <View className="desc">账户余额仅用于提现，如遇问题请联系管理员</View>
        </View>


        {/* <View bindtap="__e" className="detail" data-event-opts="{{[ [ 'tap',[ [ 'pushAccountList',['$event'] ] ] ] ]}}"> */}
        <View className="detail">

          <View className="left">
            <Image className="icon" src={leftIcon}></Image>
            <Text className="Text">明细</Text>
          </View>
          <Image className="icon-right-arrow" src={rightIcon}></Image>
        </View>
      </View>

    )
  }
}

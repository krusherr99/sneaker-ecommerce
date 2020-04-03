import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AddressList from '../components/AddressList'
import classNames from 'classnames';

import './index.less'

export default class ShippingAddressPage extends Component {

  render () {
    return (
      <View>
        <AddressList />
        <View  className={classNames('add-area',{'fix-iphonex': false})}>
          <View className={classNames('add-button',{'fix-iphonex-btn': false})}>添加新地址</View>
        </View>
      </View>
    )
  }
}

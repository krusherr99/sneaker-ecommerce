import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AddressList from '../components/AddressList'
import classNames from 'classnames';

import './index.less'
import axios from 'taro-axios';
import { connect } from '@tarojs/redux';

export type Address = {
  city: string
  default: boolean
  detailAddress: string
  district: string
  id: number
  name: string
  phone: string
  province: string
  userId: number
}

interface ShippingAddressPageProps {
  address: any
}
// interface ShippingAddressPageState {
//   addressList: Array<Address>
// }

@connect(({ address }) => ({ address }))
export default class ShippingAddressPage extends Component<ShippingAddressPageProps> {


  addNewAddress = () => {
    Taro.navigateTo({
      url: '/account/AddressEditPage/index'
    })
  }


  render() {
    const { addressList } = this.props.address
    return (
      <View>
        <AddressList addressList={addressList} />
        <View className={classNames('add-area', { 'fix-iphonex': false })}>
          <View
            className={classNames('add-button', { 'fix-iphonex-btn': false })}
            onClick={this.addNewAddress}
          >
            添加新地址
          </View>
        </View>
      </View>
    )
  }
}

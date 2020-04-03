import Taro, { Component, Config } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import classNames from 'classnames';

import './index.less'

const addressList = [
  {
    name: '起名字好难啊',
    mobile: '182****7296',
    province: '江苏省',
    city: '南通市',
    district: '通州区',
    address: '润园花苑',
    isDefault: 1
  },
  {
    name: '起名字好难啊',
    mobile: '182****7296',
    province: '江苏省',
    city: '南通市',
    district: '通州区',
    address: '润园花苑',
    isDefault: 0
  }
]

export default class AddressList extends Component {

  config: Config = {
    navigationBarTitleText: '收货地址'
  }

  render() {
    return (
      <View className={classNames('addressList ', { 'address-list-iphonex-bottom': false })}>
        {
          addressList.map(item => {
            return (
              <View className="addressContainer ">
                <View className="addressContent ">
                  <View className="name ">{'' + item.name + ''}</View>
                  <View className="phone ">{'' + item.mobile + ''}</View>
                </View>
                <View className="address">{'' + item.province + item.city + item.district + item.address + ''}</View>
                <View className="bottomArea ">
                  <View className="select ">
                    <View className="checkbox ">
                      {
                        item.isDefault == 1 && <Icon className="weui-icon-checkbox_success " color="#16a5af" size="20" type="success"></Icon>
                      }
                      {
                        item.isDefault == 0 && <Icon className="weui-icon-checkbox_success " color="#ccc" size="20" type="success"></Icon>
                      }
                    </View>
                    <View className="selectTitle ">默认地址</View>
                  </View>
                  <View className="operate ">
                    <View className="edit " >编辑</View>
                    <View className="delete " data-index="{{index}}">删除</View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View >
    )
  }
}

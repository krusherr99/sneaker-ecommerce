import Taro, { Component, Config, ComponentClass } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import classNames from 'classnames';
import { changeAddress } from '../../../actions/address'
import './index.less'
import { Address } from 'src/account/ShippingAddressPage';
import { connect } from '@tarojs/redux';

// const addressList = [
//   {
//     name: '起名字好难啊',
//     phone: '182****7296',
//     province: '江苏省',
//     city: '南通市',
//     district: '通州区',
//     address: '润园花苑',
//     default: 1
//   },
//   {
//     name: '起名字好难啊',
//     phone: '182****7296',
//     province: '江苏省',
//     city: '南通市',
//     district: '通州区',
//     address: '润园花苑',
//     default: 0
//   }
// ]
interface AddressListOwnProps  {
  addressList: Array<Address>;
}

interface AddressListDispatchProps {
  changeAddress: (addressId: number) => void
}

type AddressListStateProps = { }

type AddressListProps = { }

type IProps = AddressListStateProps & AddressListDispatchProps & AddressListOwnProps

interface AddressList {
  props: IProps
}

@connect(() => ({}), (dispatch) => ({
  changeAddress: (addressId) => {
    dispatch(changeAddress(addressId))
  }
}))
class AddressList extends Component<AddressListProps> {

  config: Config = {
    navigationBarTitleText: '收货地址'
  }

  selectAddress = (id) => {
    this.props.changeAddress(id)
    Taro.navigateBack()
  }

  selectDefaultAddress = (selectIndex) => {
    // 修改该item的default的值，然后itemList里默认的那个要改为false
    const { addressList } = this.props
    addressList.map((item, index) => {
      if(item.default === true) {
        item.default = false
        // 修改地址接口
        
      }
      if(selectIndex === index) {
        item.default = true
        // 修改地址接口
      }
    })
    
    
    // init修改后的store

    // navigateBack
  }

  render() {
    const { addressList } = this.props
    return (
      <View className={classNames('addressList ', { 'address-list-iphonex-bottom': false })}>
        {
          addressList.map((item, index) => {
            return (
              <View className="addressContainer ">

                <View onClick={this.selectAddress.bind(this, item.id)}>
                  <View className="addressContent ">
                    <View className="name ">{'' + item.name + ''}</View>
                    <View className="phone ">{'' + item.phone + ''}</View>
                  </View>
                  <View className="address">{'' + item.province + item.city + item.district + item.detailAddress + ''}</View>
                </View>

                <View className="bottomArea ">
                  <View className="select " onClick={this.selectDefaultAddress.bind(this, index)}>
                    <View className="checkbox ">
                      {
                        item.default == true && <Icon className="weui-icon-checkbox_success " color="#16a5af" size="20" type="success"></Icon>
                      }
                      {
                        item.default == false && <Icon className="weui-icon-checkbox_success " color="#ccc" size="20" type="success"></Icon>
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

export default AddressList
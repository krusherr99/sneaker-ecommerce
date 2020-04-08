import Taro, { Component, Config, ComponentClass } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import classNames from 'classnames';
import { changeAddress, updateAddress, initAddress } from '../../../actions/address';
import './index.less'
import { Address } from 'src/account/ShippingAddressPage';
import { connect } from '@tarojs/redux';
import axios from 'taro-axios';

interface AddressListOwnProps  {
  addressList: Array<Address>;
}

interface AddressListDispatchProps {
  changeAddress: (addressId: number) => void,
  updateAddress: (addressId: number, address: Address) => void,
  initAddress: () => void
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
  },
  updateAddress: (addressId, address) => {
    dispatch(updateAddress(addressId, address))
  },
  initAddress: () => {
    dispatch(initAddress())
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
        // 将原来的默认移除
        item.default = false
        // redux向后端请求更新
        this.props.updateAddress(item.id, item)
      }
      if(selectIndex === index) {
        item.default = true
        // redux向后端请求更新
        this.props.updateAddress(item.id, item)
        // 返回上一页
        Taro.navigateBack()
      }
    })
  }

  editAddress = (id) => {
    Taro.navigateTo({
      url: `/account/AddressEditPage/index?id=${id}`
    })
  }

  deleteAddress = (id) => {
    axios.delete(`http://localhost:8080/address/${id}`)
      .then(resp => {
        console.log(resp.data.data);
        this.props.initAddress()
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { addressList } = this.props
    return (
      <View className={classNames('addressList ', { 'address-list-iphonex-bottom': false })}>
        {
          addressList.map((item, index) => {
            return (
              <View key={item.district} className="addressContainer ">

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
                    <View className="edit " onClick={this.editAddress.bind(this, item.id)} >编辑</View>
                    <View className="delete " onClick={this.deleteAddress.bind(this, item.id)}>删除</View>
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
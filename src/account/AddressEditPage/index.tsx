import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Picker, Image } from '@tarojs/components'

import './index.less'
import { BaseEventOrigFunction } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import axios from 'taro-axios'
import { connect } from '@tarojs/redux'
import { initAddress } from '../../actions/address';

interface AddressEditPageProps { }
interface AddressEditPageState {
  userId: number
  region: Array<string>
  name: string
  phone: string
  detailAddress: string
  isUpdate: boolean
  id: number
  isDefault: boolean
}

interface AddressEditPageDispatchProps {
  initAddress: () => any
}

interface AddressEditPageStateProps { }

type IProps = AddressEditPageStateProps & AddressEditPageDispatchProps & AddressEditPageState

interface AddressEditPage {
  props: IProps
}

@connect(() => ({}), (dispatch) => ({ initAddress: () => { dispatch(initAddress()) } }))
class AddressEditPage extends Component<AddressEditPageProps, AddressEditPageState> {
  state: AddressEditPageState = {
    // 需通过redux获取，目前写死
    userId: 5,
    region: ['请选择', '', ''],
    name: '',
    phone: '',
    detailAddress: '',
    isUpdate: false,
    isDefault: false,
    id: 0
  }

  onRegionChange = (e) => {
    console.log(e.detail);
    this.setState({
      region: e.detail.value
    })
  }

  onInput: BaseEventOrigFunction<InputProps.inputEventDetail> = (event) => {
    switch (event.target.id) {
      case 'name':
        this.setState({ name: event.detail.value })
        break;
      case 'phone':
        this.setState({ phone: event.detail.value })
        break;
      case 'detailAddress':
        this.setState({ detailAddress: event.detail.value })
        break;
    }
  }

  componentDidMount() {
    if (!this.$router.params.id) {
      return
    }
    this.setState({ isUpdate: true })
    axios.get(`http://localhost:8080/address/${this.$router.params.id}`)
      .then(resp => {
        const { id, userId, name, phone, detailAddress, province, city, district, isDefault } = resp.data.data
        const region = [province, city, district]
        this.setState({
          userId,
          name,
          phone,
          detailAddress,
          region,
          id,
          isDefault
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  saveAddressTap = () => {

    const { userId, name, phone, region, detailAddress, isUpdate, id } = this.state
    isUpdate
      ?
      axios.put(
        `http://localhost:8080/address/${id}`,
        {
          id,
          userId,
          name,
          phone,
          province: region[0],
          city: region[1],
          district: region[2],
          detailAddress: detailAddress,
          isDefault: false
        }
      )
        .then(resp => {
          Taro.showToast({
            title: resp.data.message,
            duration: 1500,
            icon: 'none',
          })
          this.props.initAddress()
          setTimeout(() => {
            Taro.navigateBack()
          }, 1500)
        })
        .catch(err => {
          console.log(err);
        })

      :
      axios.post(
        'http://localhost:8080/address',
        {
          userId,
          name,
          phone,
          province: region[0],
          city: region[1],
          district: region[2],
          detailAddress: detailAddress,
          isDefault: false
        }
      )
        .then(resp => {
          Taro.showToast({
            title: resp.data.message,
            duration: 1500,
            icon: 'none',
          })
          this.props.initAddress()
          setTimeout(() => {
            Taro.navigateBack()
          }, 1500)
        })
        .catch(err => {
          console.log(err);
        })


  }

  render() {
    const { region, name, phone, detailAddress } = this.state
    return (
      <View>
        <View className="container">
          <View className="name-view">
            <Text className="name-label">收货人</Text>
            <Input id="name" className="name-input" confirmType="next" placeholder="填写姓名" placeholderClass="name-placeholder" onInput={this.onInput} value={name}></Input>
          </View>
          <View className="name-view">
            <Text className="number-label">联系电话</Text>
            <Input id="phone" onInput={this.onInput} className="number-input" confirmType="next" maxLength={11} placeholder="填写手机号" placeholderClass="number-placeholder" value={phone}></Input>
          </View>
          <View className="area-view">
            <Text className="area-label">所在区域</Text>
            <Picker mode='region' onChange={this.onRegionChange} value={[]}>
              <Text className="area-text">{region.join('')}</Text>
              <Image className="arrow-image" src='https://cdn.poizon.com/node-common/YXJyb3dfcmlnaHQ=.png'></Image>
            </Picker>
          </View>
          <View className="detail-text-view">
            <Textarea onInput={this.onInput} id="detailAddress" className="detail-text-area" placeholder="填写详细地址" placeholderClass="detail-placeholder" value={detailAddress}></Textarea>
          </View>
        </View>
        <View className="button">
          {/* <View  className="save-button"  wx:if="{{!userAddressId}}">保存</View> */}
          <View className="save-button" onClick={this.saveAddressTap}>保存</View>
          {/* <View className="delete-save-view" wx:else> */}
          {/* <View className="delete-save-view">
            <View  className="delete-view" >删除地址</View>
            <View  className="save-view" >保存</View>
        </View> */}
        </View>
      </View>
    )
  }
}

export default AddressEditPage
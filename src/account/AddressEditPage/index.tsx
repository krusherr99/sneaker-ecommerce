import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Textarea, Picker, Image } from '@tarojs/components'

import './index.less'

export default class AddressEditPage extends Component {
  state = {
    region: ['请选择', '', ''],
    arrowImage: 'https://cdn.poizon.com/node-common/YXJyb3dfcmlnaHQ=.png'
  }

  onRegionChange = (e) => {
    console.log(e.detail);
    this.setState({
      region: e.detail.value
    })
  }

  render() {
    const { region, arrowImage } = this.state
    return (
      <View>
        <View className="container">
          <View className="name-view">
            <Text className="name-label">收货人</Text>
            <Input className="name-input" confirmType="next" placeholder="填写姓名" placeholderClass="name-placeholder" value="{{name}}"></Input>
          </View>
          <View className="name-view">
            <Text className="number-label">联系电话</Text>
            <Input className="number-input" confirmType="next" maxLength={11} placeholder="填写手机号" placeholderClass="number-placeholder" value="{{phone}}"></Input>
          </View>
          <View className="area-view">
            <Text className="area-label">所在区域</Text>
            <Picker mode='region' onChange={this.onRegionChange} value={[]}>
              <Text className="area-text">{region.join('')}</Text>
              <Image className="arrow-image" src={arrowImage}></Image>
            </Picker>
          </View>
          <View className="detail-text-view">
            <Textarea className="detail-text-area" placeholder="填写详细地址" placeholderClass="detail-placeholder" value="{{detailAddress}}"></Textarea>
          </View>
        </View>
        <View className="button">
          {/* <View  className="save-button"  wx:if="{{!userAddressId}}">保存</View> */}
          <View className="save-button">保存</View>
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

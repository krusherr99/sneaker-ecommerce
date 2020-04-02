import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import SplitLine from '../components/SplitLine'
import Product from '../components/Product'

const remindingList = [
  '1、若商家未早36小时内发货导致交易失败，您将获得1130.45元现金及总计人民币170元的满减优惠券补偿。',
  '2、每件交易商品均由平台针对实物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等强开，故不支持退换差价。',
  '3、温馨提示：商品价格由市场供需决定，可能存在波动，请理性消费',
  '4、个人卖家ID: P905158520，商品属于个人全新闲置物品，市场价格存在波动，故不适用7天无理由退货。'
]

export default class OrderConfirmPage extends Component {

  render() {
    return (
      <View>
        <View className='address-info-container'>
          <Image className='location' src="http://cdn.poizon.com/node-common/cGxhY2UxNTgzMjIyMDAwNTgz.svg"></Image>
          <View className='info'>
            <View className='user'>
              <View className='name'>收货人：起个名字好难</View>
              <View className='mobile'>182****7296</View>
              <Image className='arrow' src="http://cdn.poizon.com/node-common/ZW50ZXIxNTgzMzE3MjkxMzI0.svg"></Image>
            </View>
            <View className='address'>河北省石家庄市长安区润园小区</View>
          </View>
        </View>
        <SplitLine lineHeight={16} />
        <Product />
        <SplitLine lineHeight={16} />
        <View className='cost-details-info'>
          <View className='delivery'>
            <View className='lable'>顺丰速运</View>
            <View className='cost'>
              <Text className='unit'>￥</Text>
              <Text className='price'>23</Text>
            </View>
          </View>
        </View>
        <SplitLine lineHeight={16} />
        <View className='purchase-reminding-container'>
          {
            remindingList.map(item => {
              return (
                <View className='item'>{item}</View>
              )
            })
          }
          <View className='item'>
            提交订单即表示同意 <Text className='must-see'>买家须知</Text>
          </View>
        </View>
        <View className='bottem-space'></View>
        <View className='footer-wrapper'>
          <View className='submit-info-container'>
            <View className='detail'>
                <View className="desc">实付款：</View>
                <View className="unit">¥</View>
                <View className="amount">2632</View>
            </View>
            <View className='operator'>提交订单</View>
          </View>
        </View>
      </View>
    )
  }
}

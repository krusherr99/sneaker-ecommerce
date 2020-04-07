import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
import { OrderItem } from 'src/order/OrderConfirmPage'

interface ProductProps {
  orderItem: OrderItem
}

export default class Product extends Component<ProductProps> {
  render() {
    const { orderItem } = this.props
    return (
      <View className="order-product">
        <View className='img-container'>
          <Image className="img" src={orderItem.imageUrl}></Image>
        </View>
        <View className="info">
          <View className="title">{orderItem.title}</View>
          <View className="sku">
            {orderItem.size}
            <Text className="count">
              {`数量x${1}`}
            </Text>
          </View>
          <View className="price">
            <Text className="symbol">¥</Text>{orderItem.price}</View>
        </View>
      </View>
    )
  }
}

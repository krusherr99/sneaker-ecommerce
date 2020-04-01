import Taro, { Component } from '@tarojs/taro'
import { View, Image} from '@tarojs/components'

import './index.less'





export default class ProductDetail extends Component {
  render () {
    return (
      <View className='product-detail'>
        <View className='ad'>
          <Image src="https://cdn.poizon.com/node-common/JUU5JTg5JUI0JUU1JTg4JUFCJUU1JTkzJTgxJUU1JUFFJUEzQDN4.png?x-oss-process=image/resize,w_1080" />
        </View>
        <View className='detail-extra'>
          <View className='wrap-title'>参数</View>
          <View className='extra-list'>
            <View className='extra-list-title'>货号</View>
            <View className='extra-list-info'>553560-116</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>发售价格</View>
            <View className='extra-list-info'>￥599(仅供参考)</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>发售日期</View>
            <View className='extra-list-info'>2019.03.23</View>
          </View>
          <View className='extra-list'>
            <View className='extra-list-title'>配色</View>
            <View className='extra-list-info'>黑红</View>
          </View>
        </View>
        <View className='wrap'>
          <Image src="https://du.hupucdn.com/a7a416b816b786650e0b412bf05ec4b5.png?imageView2/2/w/1080" style={{ height: '38.5px' }} />
          <Image src="https://du.hupucdn.com/8b8046b7c7257d89724ba506419f9666.jpg?imageView2/2/w/1080" style={{ height: '202px' }} />
          <Image src="https://china-product.poizon.com/spu-27372-history-7-450956.png?x-oss-process=image/resize,w_1080" style={{ height: '148.958px' }} />
          <Image src="https://du.hupucdn.com/4df07896cca08e4d21f37374adb19e76.jpg?imageView2/2/w/1080" style={{ height: '202px' }} />
          <Image src="https://du.hupucdn.com/7be5799c55aaa9df78594a5b37418d49.jpg?imageView2/2/w/1080" style={{ height: '202px' }} />
          <Image src="https://du.hupucdn.com/97f9849fad1f8cc67be2010847c13d3c.jpg?imageView2/2/w/1080" style={{ height: '202px' }} />
        </View>
      </View>
    )
  }
}

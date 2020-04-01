import Taro, { Component } from '@tarojs/taro'
import './index.less'
import { View, ScrollView, Image } from '@tarojs/components'

import item1 from './images/item1.jpg'

export default class CategoryContent extends Component {


  render() {
    return (
      <ScrollView 
        className='right-scrollview'
        scrollY
      >
        <View className='scroll-view-content'>

          <View className='section'>
            <View className='section-header'>
              <View className='left-line'></View>
              <View className='header-series-name'>Nike</View>
              <View className='right-line'></View>
            </View>
            <View className='series-list'>
                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>
            </View>
          </View>
          
          <View className='section'>
            <View className='section-header'>
              <View className='left-line'></View>
              <View className='header-series-name'>Nike</View>
              <View className='right-line'></View>
            </View>
            <View className='series-list'>
                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>
            </View>
          </View>
          
          <View className='section'>
            <View className='section-header'>
              <View className='left-line'></View>
              <View className='header-series-name'>Nike</View>
              <View className='right-line'></View>
            </View>
            <View className='series-list'>
                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>

                <View className='series-item'>
                  <Image className='series-image' src={item1}></Image>
                  <View className='series-name'>1970s</View>
                </View>
            </View>
          </View>
        
        </View>
      </ScrollView>
    )
  }
}

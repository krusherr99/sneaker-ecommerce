import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'


import './index.less'

const hotWords = ['紫脚趾', 'Nike X Stussy', '黑生胶', 'Dunk', 'T恤', 'supreme SS20']
const historyWords = ['Beats', 'AJ11', '欧文5']

export default class SearchBox extends Component {
  render() {
    return (
      // hidden="{{!showHotView}}"
      <View className="search-hot" >
        {
          hotWords.length > 0
          &&
          <View>
            <View className="hot-title">热门搜索</View>
            <View className="hot-margin-view">
              {
                hotWords.map(item => {
                  return (
                    <View className="hot-word-view">
                      <View className="word-text" >{item}</View>
                    </View>
                  )
                })
              }
            </View>
          </View>
        }
        {/* wx: if="{{historyWords.length>0}}" */}
        {
          historyWords.length > 0
          &&
          <View>
            <View className="history-title-view">
              <View className="history-title-text">历史搜索</View>
              {/* data-event-opts="{{[ [ 'tap',[ [ 'deleteHistory',['$event'] ] ] ] ]}}" */}
              <Image className="rubbish" src="https://cdn.poizon.com/node-common/c2VhcmNoX3J1YmJpc2g=.png"></Image>
            </View>
            <View className="his-margin-view">
              {
                historyWords.map(item => {
                  return (
                    <View className="history-word-view" >
                      {/*  data-event-opts="{{[ [ 'tap',[ [ 'wordTap',['$event'] ] ] ] ]}}" data-index="{{item}}" */}
                      <View className="history-word-text">{item}</View>
                    </View>
                  )
                })
              }
            </View>
          </View >
        }
      </View >

    )
  }
}

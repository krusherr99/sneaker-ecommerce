import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Text } from '@tarojs/components'
import { IndexState } from 'src/pages/index'

interface LoadMoreProps extends Partial<IndexState> {}

export default class LoadMore extends Component<LoadMoreProps> {

  render() {
    let { loading, hasMore } = this.props
    return (
      <View>
        {
          loading
          &&
          <View className='home__loading'>
            <Text className='home__loading-txt'>正在加载中...</Text>
          </View>
        }
        {
          !hasMore
          &&
          <View className='home__loading home__loading--not-more'>
            <Text className='home__loading-txt'>没有更多</Text>
          </View>
        }
      </View>
    )
  }
}

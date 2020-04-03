import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, PickerView, PickerViewColumn, Text, Picker } from '@tarojs/components'


export default class Test extends Component {
  state = {
    selector: ['','',''],
    selectorChecked: ['请选择', '' , ''],
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    console.log(e.detail);
    this.setState({
      selectorChecked: e.detail.value
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='region' onChange={this.onChange} value={this.state.selector}>
                <View className='picker'>
                  {this.state.selectorChecked.join('')}
                </View>
              </Picker>
            </View>
          </View>
{/* 
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
         */}
        </View>
      </View>
    )
  }
}
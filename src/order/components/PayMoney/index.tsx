import Taro, { Component } from '@tarojs/taro'

import './index.less'
import { View, Text, Input, Image } from '@tarojs/components'
import { BaseEventOrigFunction } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import classNames from 'classnames';
import wallet from './wallet.png'

interface PayMoneyProps {
  finishPay: () => void
}

export default class PayMoney extends Component<PayMoneyProps> {

  state = {
    length: 0,
    done: false
  }

  inputPassword: BaseEventOrigFunction<InputProps.inputEventDetail> = (e) => {
    console.log(e.detail.value.length);
    this.setState({ length: e.detail.value.length }, () => {
      if (this.state.length === 6) {
        console.log('长度是', this.state.length);
        this.setState({ done: true })
        this.props.finishPay()
      }
    })
  }

  render() {
    const { length } = this.state
    return (
      <View className={classNames('', { 'outer': !this.state.done })}>
        {
          this.state.done
            ?
            ''
            :
            <View className='pay-container'>
              <View className='top'>请输入支付密码</View>
              <View className='title'>得物-潮流装备交易平台</View>
              <View className='money'>￥522.00</View>
              <View className='divide'></View>
              <View className='wallet'>
                <View style={{ display: 'flex' }}>
                  <Image src={wallet} style={{ height: '40rpx', width: '40rpx', marginRight: '5rpx' }}></Image>
                  <Text>我的钱包</Text>
                </View>
                <View>剩余6012元</View>
              </View>
              <View className='pay-input-container'>
                <View className='pay-input' >
                  <View className={classNames("password-item", { 'show': length >= 1 })}></View>
                </View>

                <View className='pay-input'>
                  <View className={classNames("password-item", { 'show': length >= 2 })}></View>
                </View>

                <View className='pay-input'>
                  <View className={classNames("password-item", { 'show': length >= 3 })}></View>
                </View>

                <View className='pay-input'>
                  <View className={classNames("password-item", { 'show': length >= 4 })}></View>
                </View>

                <View className='pay-input'>
                  <View className={classNames("password-item", { 'show': length >= 5 })}></View>
                </View>

                <View className='pay-input'>
                  <View className={classNames("password-item", { 'show': length >= 6 })}></View>
                </View>

              </View>
              <Input className='hide' focus={true} password type='number' onInput={this.inputPassword}></Input>
            </View>
        }
      </View>
    )
  }
}
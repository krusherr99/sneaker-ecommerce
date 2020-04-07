import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Label, Text, Form, Button } from '@tarojs/components'


import './index.less'
import closeIcon from './icon_login_close@3x.png'
import { BaseEventOrigFunction } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import { FormProps } from '@tarojs/components/types/Form'
import axios from 'taro-axios'

const placeholderStyle = " color: #e4e4ef;font-family: PingFangSC-Medium;font-size: 50rpx;transform: scale(0.52);transform-origin: center left;height: 60rpx;line-height: 60rpx;"

export default class Login extends Component {

  state = {
    userName: '',
    password: '',
    placeholderStyle: placeholderStyle
  }

  goRegister = () => {
    Taro.navigateTo({
      url: '/pages/register/index'
    })
  }

  onSubmit = () => {
    const { placeholderStyle, ...loginDto } = this.state
    axios.post('http://localhost:8080/user/login', { ...loginDto })
      .then(resp => {
        const { message, success } = resp.data
        if (!success) {
          return Taro.showToast({
            title: message,
            duration: 1500,
            icon: 'none',
          })
        }
        Taro.showToast({
          title: message,
          duration: 1500,
          icon: 'none',
        })
        setTimeout(() => {
          Taro.setStorageSync('isLogin', true)
          Taro.navigateBack()
        }, 1500)

      })
      .catch(err => {
        console.log(err);
      })
  }

  onInput = (event) => {
    switch (event.target.id) {
      case 'userName':
        this.setState({ userName: event.detail.value })
        break;
      case 'password':
        this.setState({ password: event.detail.value })
        break;
    }
  }

  render() {
    return (
      <View className="mask">
        <View className="loginbox">
          <View className="text-box">
            <Image className="logo" src="https://cdn.poizon.com/node-common/JUU1JUJFJTk3JUU3JTg5JUE5bG9nb0AzeDE1NzYxMzIyMTAyOTM=.png"></Image>
          </View>
          <View className="phone-input">
            <Text className="phone-add">用户名</Text>
            {/* bindinput="__e" data-ref="phone" data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','mobile','$event',[] ] ],[ 'handerMobile',['$event'] ] ] ] ]}}" */}
            <Input id="userName" onInput={this.onInput} className="phone vue-ref" placeholder="输入用户名" placeholderStyle={placeholderStyle} type="text"></Input>

            {/* bindtap="__e"  data-event-opts="{{[ [ 'tap',[ [ 'clearText',['$event'] ] ] ] ]}}" */}
            {/* <View className="close-warp"> */}

            {/* hidden="{{!mobile}}" */}
            {/* <Image className="close" src={closeIcon}></Image>
            </View> */}

          </View>
          <View className="line"></View>
          <View className="phone-input">
            <Text className="phone-add">密码</Text>
            {/* bindinput="__e" data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','code','$event',[] ] ],[ 'handerCode',['$event'] ] ] ] ]}}" */}
            <Input id="password" onInput={this.onInput} className="code vue-ref" placeholder="输入密码" placeholderStyle={placeholderStyle} password value="{{code}}"></Input>

            {/* className="{{['code-status',isActive&&!codeInAjax?'active':'']}}" bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'getCode',['$event'] ] ] ] ]}}"  */}
            {/* <View className="code-status">{'获取验证码'}</View> */}
          </View>
          <View className="line two"></View>

          {/*  bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'doLogin',['$event'] ] ] ] ]}}" */}
          <View className="login-button" onClick={this.onSubmit}>登录</View>
          <View className="login-tips">
            还没有账号？
            <Label className="login-tips-protocol _span" onClick={this.goRegister} >
              现在注册一个
            </Label>

            {/* <View className="_br"></View>
            登录或注册表示同意 */}

            {/* bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'goUserProtocol',['$event'] ] ] ] ]}}" */}
            {/* <Label className="login-tips-protocol _span" >
              《用户协议》
            </Label>
              与 */}

            {/* bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'goPrivacyProtocol',['$event'] ] ] ] ]}}" */}
            {/* <Label className="login-tips-protocol _span" >
              《隐私权政策》
            </Label> */}
          </View>
        </View>
      </View>

    )
  }
}

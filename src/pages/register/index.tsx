import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Input, Label, Text } from '@tarojs/components'


import './index.less'
import closeIcon from './icon_login_close@3x.png'
import { InputProps } from '@tarojs/components/types/Input'
import { BaseEventOrigFunction } from '@tarojs/components/types/common'
import axios from 'taro-axios'

const placeholderStyle = " color: #e4e4ef;font-family: PingFangSC-Medium;font-size: 50rpx;transform: scale(0.52);transform-origin: center left;height: 60rpx;line-height: 60rpx;"

interface RegisterProps { };
interface RegisterState {
  userName: string,
  nickName: string,
  password: string,
  confirmPassword: string,
  placeholderStyle: string
}

export default class Register extends Component<RegisterProps, RegisterState> {
  config: Config = {
    navigationBarTitleText: '注册'
  }

  state: RegisterState = {
    userName: '',
    nickName: '',
    password: '',
    confirmPassword: '',
    placeholderStyle: placeholderStyle
  }

  onInput: BaseEventOrigFunction<InputProps.inputEventDetail> = (event) => {
    switch (event.target.id) {
      case 'userName':
        this.setState({ userName: event.detail.value })
        break;
      case 'nickName':
        this.setState({ nickName: event.detail.value })
        break;
      case 'password':
        this.setState({ password: event.detail.value })
        break;
      case 'confirmPassword':
        this.setState({ confirmPassword: event.detail.value })
        break;
    }
  }

  handleRegisterTap = () => {
    const { placeholderStyle, confirmPassword, ...registerDto } = this.state
    console.log({ confirmPassword }, registerDto.password);
    if (confirmPassword !== registerDto.password) {
      Taro.showToast({
        title: '两次密码不一致！',
        duration: 2000,
        icon: 'none'
      })
      return
    }
    axios.post(`http://localhost:8080/user/register`, { ...registerDto })
      .then(resp => {
        Taro.showToast({
          title: '注册成功',
          duration: 2500,
          icon: 'success'
        }).then(resp => {
          setTimeout(() => {
            Taro.navigateBack()
          }, 2500)
        })
      })
      .catch(err => {
        console.log(err);
      })

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
            {/* bindinput="__e"  data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','mobile','$event',[] ] ],[ 'handerMobile',['$event'] ] ] ] ]}}" */}
            <Input className="phone vue-ref" id="userName" onInput={this.onInput} data-ref="phone" placeholder="输入用户名" placeholderStyle={placeholderStyle} type="number" value="{{mobile}}"></Input>

            {/* bindtap="__e"  data-event-opts="{{[ [ 'tap',[ [ 'clearText',['$event'] ] ] ] ]}}" */}
            {/* <View className="close-warp"> */}

            {/* hidden="{{!mobile}}" */}
            {/* <Image className="close" src={closeIcon}></Image>
            </View> */}

          </View>

          <View className="line"></View>

          <View className="phone-input">
            <Text className="phone-add">昵称</Text>
            {/* bindinput="__e"  data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','mobile','$event',[] ] ],[ 'handerMobile',['$event'] ] ] ] ]}}" */}
            <Input className="phone vue-ref" id="nickName" data-ref="phone" onInput={this.onInput} placeholder="输入昵称" placeholderStyle={placeholderStyle} type="number" value="{{mobile}}"></Input>
          </View>

          <View className="line"></View>
          <View className="phone-input">
            <Text className="phone-add">密    码</Text>
            {/* bindinput="__e"  data-ref="code" data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','code','$event',[] ] ],[ 'handerCode',['$event'] ] ] ] ]}}"  */}
            <Input className="code vue-ref" id="password" placeholder="输入密码" placeholderStyle={placeholderStyle} password onInput={this.onInput} />

            {/* className="{{['code-status',isActive&&!codeInAjax?'active':'']}}" bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'getCode',['$event'] ] ] ] ]}}"  */}
            {/* <View className="code-status">{'获取验证码'}</View> */}
          </View>

          <View className="line"></View>
          <View className="phone-input">
            <Text className="phone-add">确认密码</Text>
            {/* bindinput="__e"  data-ref="code" data-event-opts="{{[ [ 'input',[ [ '__set_model',[ '','code','$event',[] ] ],[ 'handerCode',['$event'] ] ] ] ]}}" */}
            <Input className="code vue-ref" id="confirmPassword" placeholder="输入密码" placeholderStyle={placeholderStyle} password onInput={this.onInput}></Input>

            {/* className="{{['code-status',isActive&&!codeInAjax?'active':'']}}" bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'getCode',['$event'] ] ] ] ]}}"  */}
            {/* <View className="code-status">{'获取验证码'}</View> */}
          </View>

          <View className="line two"></View>

          {/*  bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'doLogin',['$event'] ] ] ] ]}}" */}
          <View className="login-button" onClick={this.handleRegisterTap} >注册</View>
          <View className="login-tips">
            {/* 还没有账号？
            <Label className="login-tips-protocol _span" >
              现在注册一个
            </Label> */}
            <View className="_br"></View>
            注册表示同意

            {/* bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'goUserProtocol',['$event'] ] ] ] ]}}" */}
            {/* <Label className="login-tips-protocol _span" > */}
              《用户协议》
            {/* </Label> */}
              与

              {/* bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'goPrivacyProtocol',['$event'] ] ] ] ]}}" */}
            {/* <Label className="login-tips-protocol _span" > */}
              《隐私权政策》
            {/* </Label> */}
          </View>
        </View>
      </View>

    )
  }
}

import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import 'taro-ui/dist/style/index.scss'
const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      
      // 'pages/product/ProductCategory/index',
      // 'pages/product/ProductSearchResult/index',
      // 'pages/product/product'a,
      'pages/index/index',
      'pages/test/index',
      'pages/tabmine/index',
      'pages/register/index',
      'pages/login/index'
    ],
    "subPackages": [
      {
        "root": 'product',
        "pages": [
          'ProductCategory/index',
          'ProductSearchResult/index',
          'product'
        ]
      },
      {
        "root": 'order',
        "pages": [
          'index',
          'OrderConfirmPage/index',
          'buyer/OrderDetail/index',
          'BuyPaySuccessPage/index'
        ]
      },
      {
        "root": "account",
        "pages": [
          'ShippingAddressPage/index',
          'AddressEditPage/index',
          'MyCashPage/index'
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#F8F8F8',
      navigationBarTitleText: '搜索',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'bottom',
      borderStyle: 'black',
      color: '#666666',
      selectedColor: '#000000',
      backgroundColor: '#f8f9fb',
      list: [
        {
        pagePath: 'pages/index/index',
        text: '购买',
        iconPath: 'static/images/barnner1@3x.png',
        selectedIconPath: 'static/images/ic_tab_mall_selected.png',
      },
      {
        "pagePath": "pages/index/index",
        "text": " 购物车",
        "iconPath": "static/images/ic_tab_service_gray.png",
        "selectedIconPath": "static/images/ic_tab_service_selected.png"
      },
      {
        pagePath: 'pages/tabmine/index',
        text: '我',
        iconPath: 'static/images/ic_tab_user_nor.png',
        selectedIconPath: 'static/images/ic_tab_user_sel.png',
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

import Taro, { Component, createSelectorQuery } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import './index.less'


const tabList = [
  { title: '待付款', width: 42 },
  { title: '待发货', width: 42 },
  { title: '待收货', width: 42 },
  { title: '全部订单', width: 56 },
]
type TabList = typeof tabList

interface TabsBarProps { }
interface TabsBarState {
  headerWidth: number;
  selectTab: number;
  selectTabWidth: number;
  animationIconWidth: number;
  slideOffset: number;
}

const caculateSingleRemainingWidth = (headerWidth: number, tabList: TabList, selectTab: number) => {
  let tabsWidth
  for (let i = 0; i < tabList.length; i++) {
    tabsWidth = tabsWidth + tabList[selectTab].width
  }
  return (headerWidth - tabsWidth) / (tabList.length * 2)
}

let globalState = {
  fixHeaderWith: 0,
  animationIconWidth: 0,
  selectTabWidth: 0
}


export default class TabsBar extends Component<TabsBarProps, TabsBarState> {

  state: TabsBarState = {
    headerWidth: 0,
    selectTab: 0,
    selectTabWidth: 0,
    slideOffset: 0,
    animationIconWidth: 0
  }

  // V1.0 global state
  // returnWidth = (selector: string, stateProperty) => {
  //   let width
  //   const selectorQuery = createSelectorQuery()
  //   selectorQuery
  //     .in(this.$scope)
  //     .select(selector)
  //     .fields({
  //       size: true,
  //     }, resp => {
  //       globalState[stateProperty] = resp.width
  //     })
  //     .exec()
  //   return width
  // }

  // V2.0
  returnWidth = (selector: string, stateProperty) => {
    let width
    const selectorQuery = createSelectorQuery()
    selectorQuery
      .in(this.$scope)
      .select(selector)
      .fields({
        size: true,
      }, resp => {
        let state = this.state
        state[stateProperty] = resp.width
        this.setState(state)
      })
      .exec()
    return width
  }




  selectTabTap = (selectTab) => {
    // let width = 0
    // for (let i = 0; i < selectTab; i++) {
    //   width = width + tabList[selectTab - 1].width
    // }
    // width = width + 24.125 +  48.25 * (selectTab) + (tabList[selectTab].width - 30) / 2
    // this.setState({ selectTab, slideOffset: width })

    // const { headerWidth } = this.state
    // let width = 0;
    // for (let i = 0; i < selectTab; i++) {
    //   width = width + tabList[selectTab - 1].width
    // }
    // width = width + ((headerWidth - 182) / 8) * (selectTab * 2 + 1) +  (tabList[selectTab].width - 30) / 2
    // this.setState({
    //   slideOffset: width,
    //   selectTab
    // })

  }

  // componentDidMount() {
  //   const { selectTab } = this.state
  //   this.returnWidth('.fix-header', 'fixHeaderWith');
  //   this.returnWidth('.animation-icon', 'animationIconWidth')
  //   this.returnWidth('.select', 'selectTabWidth')



  //   let { fixHeaderWith, animationIconWidth, selectTabWidth } = globalState
  //   // const { selectTab } = this.state
  //   // const fixHeaderWith =  this.returnWidth('.fix-header')
  //   // const iconWidth =  this.returnWidth('.animation-icon')
  //   // const selectTabWidth =  this.returnWidth('.select')
  //   console.log(globalState);
  //   const singleRemainingWidth = caculateSingleRemainingWidth(fixHeaderWith, tabList, 0)
  //   let preTabsWidth
  //   for (let i = 0; i < selectTab; i++) {
  //     preTabsWidth = preTabsWidth + tabList[i - 1]
  //   }
  //   console.log({ selectTabWidth, animationIconWidth, singleRemainingWidth, selectTab, preTabsWidth });
  //   const slideOffset = (selectTabWidth - animationIconWidth) / 2 + singleRemainingWidth * (selectTab * 2 + 1) + preTabsWidth
  //   this.setState({ slideOffset })

  // }

   componentDidMount() {
    const { selectTab } = this.state
    this.returnWidth('.fix-header', 'fixHeaderWith');
    this.returnWidth('.animation-icon', 'animationIconWidth')
    this.returnWidth('.select', 'selectTabWidth')


    
    let { headerWidth, animationIconWidth, selectTabWidth } = this.state
    
    // const { selectTab } = this.state
    // const fixHeaderWith =  this.returnWidth('.fix-header')
    // const iconWidth =  this.returnWidth('.animation-icon')
    // const selectTabWidth =  this.returnWidth('.select')
    const singleRemainingWidth = caculateSingleRemainingWidth(headerWidth, tabList, 0)
    let preTabsWidth
    for (let i = 0; i < selectTab; i++) {
      preTabsWidth = preTabsWidth + tabList[i - 1]
    }
    console.log({ selectTabWidth, animationIconWidth, singleRemainingWidth, selectTab, preTabsWidth });
    const slideOffset = (selectTabWidth - animationIconWidth) / 2 + singleRemainingWidth * (selectTab * 2 + 1) + preTabsWidth
    this.setState({ slideOffset })

  }


  render() {
    const { selectTab, slideOffset } = this.state
    return (
      <View className='fix-header'>
        {
          tabList.map((tab, index) => {
            return (
              <View
                className={classNames('header-item', { 'select': index === selectTab })}
                onClick={this.selectTabTap.bind(this, index)}
              >{tab.title}
              </View>
            )
          })
        }
        <View className='animation-icon' style={{ transform: `translateX(${slideOffset}px)` }}></View>
      </View>
    )
  }
}

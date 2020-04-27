import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.scss'
import Banner from '../banner'
import HomeNav from '../home-nav'
import Product from '../product'
import '../../../../style/font/iconfont.css'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '页'
  };
  render () {
    return (
      <View className='index'>
        <Banner></Banner>
        <HomeNav></HomeNav>
        <Product></Product>
      </View>
    )
  };
}

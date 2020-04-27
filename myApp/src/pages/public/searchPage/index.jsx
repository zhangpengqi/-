import Taro, { Component } from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import './index.scss'
import './../../../style/font/iconfont.css'

export default class SearchPage extends Component{
  config={
    navigationBarTitleText: '搜索'
  }
  render(){
    return(
      <View>
        <View className='searchPage'>
          <View className='input'>
            <View className='iconfont icon-search' />
            <input className='search' type='text' placeholder='输入商品名称' />
          </View>
          <View className='return' onClick={()=>{
            Taro.navigateTo({
              url:'/pages/index/index'
            })
          }} >取消</View>
        </View>
      </View>
    )
  }
}

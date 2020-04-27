import {Text, View} from "@tarojs/components";
import Taro,{Component} from "@tarojs/taro";
import '../../../../style/font/iconfont.css'
import './index.scss'

export default class PageView extends Component{

  render(){
    return(
      <View className='search'>
        <View className='location'>
          <View className='iconfont icon-location' />
          <Text className='text'>位置信息</Text>
          <View className='iconfont icon-down' />
        </View>
        <View className='homeSearch' onClick={()=>{
          Taro.navigateTo(
            {
            url:'/pages/public/searchPage/index'
          })
        }}>
          <View className='iconfont icon-search' />
          <Text>输入商品名称</Text>
        </View>
      </View>
    );
  }
}

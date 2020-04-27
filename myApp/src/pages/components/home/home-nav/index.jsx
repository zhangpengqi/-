import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import './index.scss'

export default class index extends Component{

  data={
    navList:[
      {img:'./../../../../img/3.jpg',name:'白菜'},
      {img:'./../../../../img/2.jpg',name:'白菜'},
      {img:'./../../../../img/1.jpg',name:'白菜'},
      {img:'./../../../../img/2.jpg',name:'白菜'},
      {img:'./../../../../img/3.jpg',name:'白菜'},
      {img:'./../../../../img/1.jpg',name:'肉类'},
      {img:'./../../../../img/3.jpg',name:'肉类'},
      {img:'./../../../../img/2.jpg',name:'肉类'},
      {img:'./../../../../img/2.jpg',name:'肉类'},
      {img:'./../../../../img/3.jpg',name:'肉类'}],
  }
  render() {
    return (
      <View className='nav'>
        {this.data.navList.map((item)=>{
          return(
            <View key={index} className='nav-item'>
              <Image src={item.img} className='nav-img' />
              <Text className='nav-text'>{item.name}</Text>
            </View>
          )
        })}
      </View>
    );
  }
}

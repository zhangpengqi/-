import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import '../../../../style/font/iconfont.css'
import './index.scss'

export default class index extends Component{

  data={
    product:[
      {img:'./../../../../img/3.jpg',
        name:'白菜',
      price:'2.50',
      },
      {img:'./../../../../img/2.jpg',
        name:'白菜',
      price:0,
      },
      {img:'./../../../../img/1.jpg',
        name:'白菜',
      price:0,
      }
    ]

  }
  render() {
    return (
      <View>
        <Text>猜你喜欢</Text>
        {/*<Image src='./../../../img/2.jpg' />*/}
        <View className='product'>
          {this.data.product.map((item)=>{
            return(
              <View key={index} className='product-item'>
                <Image src={item.img} className='nav-img' />
                <Text className='product-name'>{item.name}</Text>
                <View className='product-bottom'>
                  <Text className='product-price'>￥{item.price}</Text>
                  <View className='iconfont icon-jiarugouwuche' />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    );
  }
}

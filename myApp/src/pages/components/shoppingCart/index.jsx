import Taro from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import {AtCheckbox,AtInputNumber} from "taro-ui";
import './index.scss'

export default class shoppingCart extends Taro.Component{

  config={
    navigationBarTitleText: '购物车'
  }
  constructor() {
    super(...arguments);
    this.state={
      numberValue:1,
      product_list:[
        {
          number: 1,
          product: {
            id: 1,
            name: "土豆鸡蛋8枚",
            describe: "别看我土里土气，我可是货真价实的高蛋白",
            price: 6.90,
            navId: 2,
            detailId: 3,
            url: "url",
            status: "1",
            stock: 12,
            weight: "50g",
            condition: "5℃",
            expiryDate: "30天"
          }
        },
        {
          number: 10,
          product: {
            id: 2,
            name: "土豆(黄心) 约500g",
            describe: "别看我土里土气，我可是货真价实的高蛋白",
            price: 6.90,
            navId: 2,
            detailId: 3,
            url: "url",
            status: "1",
            stock: 12,
            weight: "50g",
            condition: "5℃",
            expiryDate: "30天"
          }
        },
        {
          number: 1,
          product: {
            id: 3,
            name: "香葱50g",
            describe: "你负责炒，次啊票颜值交给我",
            price: 0.50,
            navId: 2,
            detailId: 3,
            url: "url",
            status: "1",
            stock: 12,
            weight: "50g",
            condition: "冷藏",
            expiryDate: "3天"
          }
        }
      ]
    }
  }
  numberHandleChange(numberValue){
    this.setState({
      numberValue
    })
  }
  handleChange(numberValue){
    this.setState({
      numberValue
    })
  }

  render() {
    return(
      <View className='shopping-cart'>
        {this.state.product_list.map((item)=>{
          return(
            <View key={item.product.id} className='product-list'>
              <Image src={item.product.url} className='image'></Image>
              <View className='product-info'>
                <Text className='product-name'>{item.product.name}</Text>
                <Text className='product-price'>￥{item.product.price}</Text>
              </View>
              <AtInputNumber
                min={0}
                max={99}
                step={1}
                value={item.number}
                onChange={this.handleChange.bind(this)}
                className='product-number'
              />

            </View>
          )
        })}
        <View className='product-list'>
          <Image src={this.state.image} className='image'></Image>
          <View className='product-info'>
            <Text className='product-name'>{this.state.name}</Text>
            <Text className='product-price'>￥{this.state.price}</Text>
          </View>
          <AtInputNumber
            min={0}
            max={10}
            step={1}
            value={this.state.numberValue}
            onChange={this.numberHandleChange.bind(this)}
            className='product-number'
          />

        </View>
        购物车
      </View>

    )
  }
}

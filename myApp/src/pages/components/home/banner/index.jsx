import Taro, { Component } from '@tarojs/taro'
import {View, Swiper, SwiperItem} from '@tarojs/components'
import Search from './../search/index'
import './index.scss'

export default class Index extends Component {

  data={
    img:['./../../../../img/1.jpg','./../../../../img/2.jpg','./../../../../img/3.jpg']
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {

    return (
      <View className='banner'>
        {/*<Image src='./../../../../img/2.jpg' />*/}
        <Search />
        <Swiper
          indicator-dots='true'
          indicator-color
          indicator-active-color='#3CB963'
          autoplay='true'
          interval='3000'
          className='swiper'
        >
          {/*遍历图片数组*/}
          {this.data.img.map((item)=>{
              return(
                <SwiperItem>
                  <cover-image  className='banner-img' src={item}></cover-image>
                </SwiperItem>
              )
            }
          )}
        </Swiper>
      </View>
    )
  };
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='friends-list-container'>
        <View className="love-friends-list-main">
          <View className="friends-body">
            <View className="friends-item">
              <View className="fl">
                <Text className="top-rank c-FF5900 f-12">01</Text>
                <Image className="top-head" src="//cdn09.ehaier.com/shunguang/H5/www/img/charity/default.jpg"/>
              </View>
                <View className="top-right fl">
                  <View className="friends-name f-14 c-03 one-line-overflow">回龙观</View>
                  <View className="friends-info f-12 one-line-overflow">
                    支持<Text className="c-03">1</Text>个项目 贡献<Text className="c-03">261</Text>个爱心</View>
                </View>
              </View>
            </View>
          </View>
        </View>
        )
      }
    }
    

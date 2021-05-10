/*
 * @Description: 首页
 * @Author: kivet
 * @Date: 2021-05-08 14:00:33
 * @LastEditTime: 2021-05-10 11:47:53
 */
import { FC } from 'react';
import { connect } from 'react-redux';
import { View, Text } from '@tarojs/components'
import { IGlobalState } from '@/models/globals'
import styles from './index.module.less'

interface IProps extends IGlobalState {}

const Home: FC<IProps> = (props) => {
  console.log("global model data:", API_BASE, props);

  return (
    <View className={styles.container}>
      <Text>这是一个基于技术栈：react 17 + TS 4.x + Taro 3.x + Taro UI 3.x + dva的小程序项目</Text>
    </View>
  );
};

export default connect((global: IGlobalState) => ({
  ...global,
}))(Home);

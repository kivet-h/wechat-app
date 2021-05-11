/*
 * @Description: 首页
 * @Author: kivet
 * @Date: 2021-05-08 14:00:33
 * @LastEditTime: 2021-05-11 10:08:19
 */
import { FC } from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { IGlobalState } from '@/models/globals';
import styles from './index.module.less';

interface IProps extends IGlobalState {}

const Home: FC<IProps> = () => {
  console.log('asdasd');
  return (
    <View className={styles.container}>
      <Text>
        这 是一个基于技术栈：react 17 + TS 4.x + Taro 3.x + Taro UI 3.x +
        dva的小程序项目
      </Text>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/pasture/index',
          });
        }}>
        按钮
      </Button>
    </View>
  );
};

export default connect((global: IGlobalState) => ({
  ...global,
}))(Home);

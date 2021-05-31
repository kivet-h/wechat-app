import { FC } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { AtButton } from 'taro-ui';
import { View, Text } from '@tarojs/components';
import { IGlobalState } from '@/models/global';
import styles from './index.module.less';

interface IProps extends IGlobalState {
  dispatch: Dispatch;
}

const Home: FC<IProps> = (props) => {
  console.log('global model层数据', props);
  return (
    <View className={styles.container}>
      <Text>这是一个基于技术栈：react 17 + TS 4.x + Taro 3.x + Taro UI 3.x + dva的小程序项目</Text>
      <AtButton type="primary">按钮文案</AtButton>
    </View>
  );
};

export default connect(({ global }: { global: IGlobalState }) => ({
  ...global,
}))(Home);

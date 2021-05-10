/*
 * @Description: 我的
 * @Author: kivet
 * @Date: 2021-05-08 14:01:38
 * @LastEditTime: 2021-05-10 15:12:32
 */
import { FC } from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.less';

interface IProps {}

const Mine: FC<IProps> = () => {
  return (
    <View className={styles.container}>
      <Text>mine</Text>
    </View>
  );
};

export default Mine;

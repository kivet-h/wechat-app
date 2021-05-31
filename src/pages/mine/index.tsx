import { FC } from 'react';
import { View } from '@tarojs/components';
import styles from './index.module.less';

interface IProps {}

const Mine: FC<IProps> = () => <View className={styles.container}>Mine</View>;

export default Mine;

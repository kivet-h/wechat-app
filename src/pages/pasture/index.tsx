/*
 * @Description: 首页
 * @Author: kivet
 * @Date: 2021-05-08 14:00:33
 * @LastEditTime: 2021-05-10 18:49:22
 */
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text, Map, CoverView } from '@tarojs/components';
import { IGlobalState } from '@/models/globals';
import LOCAL_ICON from '@/assets/local.png';
import styles from './index.module.less';

interface IProps extends IGlobalState {}

const Home: FC<IProps> = (props) => {
  const [adressInfo, setArdessInfo] = useState<{ longitude?: number; latitude?: number }>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Taro.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('==current position', res);
        const { latitude = 0, longitude = 0 } = res;
        setArdessInfo({ longitude, latitude });
        // Taro.openLocation({
        //   longitude,
        //   latitude,
        // });
      },
    });
  }, []);

  /**
   * 点击地图时触发
   */
  const onTap = (event) => {
    console.log('点击地图时触发,onTap', event);
  };

  /**
   * 点击标记点时触发，e.detail = {markerId}
   */
  const onMarkerTap = (event) => {
    console.log('点击标记点时触发，e.detail = {markerId},onMarkerTap', event);
  };

  /**
   * 点击label时触发，e.detail = {markerId}
   */
  const onLabelTap = (event) => {
    console.log('点击label时触发，e.detail = {markerId},onLabelTap', event);
  };

  /**
   * 点击控件时触发，e.detail = {controlId}
   */
  const onControlTap = (event) => {
    console.log('点击控件时触发，e.detail = {controlId},onControlTap', event);
  };

  /**
   * 点击标记点对应的气泡时触发，e.detail = {markerId}
   */
  const onCalloutTap = (event) => {
    console.log('点击标记点对应的气泡时触发，e.detail = {markerId},onCalloutTap', event);
  };

  /**
   * 在地图渲染更新完成时触发
   */
  const onUpdated = (event) => {
    console.log('在地图渲染更新完成时触发,onUpdated', event);
  };

  /**
   * 视野发生变化时触发(拖拽时)，分变化前和变化后，都会出发一次
   */
  const onRegionChange = (event) => {
    console.log('视野发生变化时触发,onRegionChange', event);
  };

  /**
   * 点击地图poi点时触发，e.detail = {name, longitude, latitude}
   */
  const onPoiTap = (event) => {
    console.log('点击地图poi（地图上的那些图标）点时触发，e.detail = {name, longitude, latitude},onPoiTap', event);
  };

  const onClickIconA = () => {
    console.log('点击icon1');
  };

  const setting = {
    showCompass: true,
    showScale: true,
  };

  const points = [
    { latitude: 30.546811, longitude: 104.064354 },
    { latitude: 30.546739, longitude: 104.060737 },
    { latitude: 30.544704, longitude: 104.060716 },
    { latitude: 30.544686, longitude: 104.064166 },
  ];

  const markersList = [
    {
      id: 0,
      latitude: 30.547553,
      longitude: 104.063113,
      iconPath: LOCAL_ICON,
      title: '标题1',
      width: 20,
      height: 25,
    },
    {
      id: 1,
      latitude: 30.545742,
      longitude: 104.063081,
      iconPath: LOCAL_ICON,
      title: '标题2',
      width: 30,
      height: 35,
    },
  ];

  const calloutList = [
    {
      points,
      color: '#DC143C',
      arrowLine: true,
      width: 3,
    },
  ];

  const circlesList = [
    {
      latitude: 30.546811,
      longitude: 104.064354,
      color: '#DC143C',
      fillColor: '#00FFFF',
      radius: 50,
    },
  ];

  const polygonList = [
    {
      points,
    },
  ];

  return (
    <View className={styles.container}>
      <Map
        className={styles.mapBox}
        latitude={adressInfo.latitude as number}
        longitude={adressInfo.longitude as number}
        // scale={16} // 缩放级别，取值范围为3-20，默认是16，值越小，范围越大
        markers={markersList} // 标记点
        // polyline={calloutList} // 路线
        // circles={circlesList} // 基于某个经纬度画圆
        // includePoints={points} // 缩放视野以包含所有给定的坐标点, 不晓得有啥用
        // showLocation // 显示带有方向的当前定位点
        // polygons={polygonList} // 多边形
        // rotate={90} // 地图图像按顺时针旋转角度展示
        // skew={40} // 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角
        // enable3D // 展示 3D 楼块， 好想不起作用
        // showCompass // 显示指南针
        // showScale // 显示比例尺
        // enableOverlooking // 开启俯视，不晓得是起啥作用的
        // enableZoom={false} // 是否支持缩放,默认支持true
        // enableScroll={false} // 是否支持拖动，默认支持true
        // enableRotate // 是否支持旋转，默认不支持 false
        // enableSatellite // 是否开启卫星图，默认不支持 false
        // enableTraffic // 是否开启实时路况，默认不支持 false
        setting={setting}
        onTap={onTap}
        onMarkerTap={onMarkerTap}
        onLabelTap={onLabelTap}
        onControlTap={onControlTap}
        onCalloutTap={onCalloutTap}
        onUpdated={onUpdated}
        onRegionChange={onRegionChange}
        onPoiTap={onPoiTap}>
        <CoverView>
          {markersList.map((item) => (
            <CoverView marker-id={item.id} key={item.id} />
          ))}
        </CoverView>
      </Map>
      <CoverView className={styles.icon1} onClick={onClickIconA}>
        I
      </CoverView>
    </View>
  );
};

export default connect((global: IGlobalState) => ({
  ...global,
}))(Home);

import React from 'react';
import { Image, Platform, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { colors, icons } from '../../assets';
import { height, width } from '../Units';

const getTabIcon = (routeName, iconProps) => {
  switch (routeName) {
    case 'Home': {
      return <View style={{ backgroundColor: iconProps.focused ? colors.white : 'transparent', height: iconProps.focused ? width * 13 : width * 6, width: iconProps.focused ? width * 13 : width * 6, borderRadius: iconProps.focused ? width * 10 : 0, alignItems: 'center', justifyContent: 'center', marginBottom: iconProps.focused ? width * 8 : 0 }}><Image source={icons.home} style={{ resizeMode: 'contain', width: width * 6, height: width * 6, tintColor: iconProps.focused ? colors.red : colors.white }} /></View>;
    }
    case 'ProfileStack': {
      return <View style={{ backgroundColor: iconProps.focused ? colors.white : 'transparent', height: iconProps.focused ? width * 13 : width * 6, width: iconProps.focused ? width * 13 : width * 6, borderRadius: iconProps.focused ? width * 10 : 0, alignItems: 'center', justifyContent: 'center', marginBottom: iconProps.focused ? width * 8 : 0 }}><Image source={icons.profile} style={{ resizeMode: 'contain', width: width * 6, height: width * 6, tintColor: iconProps.focused ? colors.red : colors.white }} /></View>;
    }
  }
};

export const getTabNavigationOptions = props => {
  return {
    tabBarIcon: iconProps => {
      return (getTabIcon(props?.route?.name, iconProps)
      );
    },
    tabBarShowLabel: false,
    lazy: true,
    // tabBarActiveTintColor:
    //   'pink',
    // tabBarInactiveTintColor:
    //   'purple',
    headerShown: false,
    tabBarItemStyle: {
      height: height * 7,
      backgroundColor: colors.red,
      paddingLeft: props?.route?.name == 'Home' ? width * 32 : 0,
      paddingRight: props?.route?.name == 'ProfileStack' ? width * 32 : 0
    },
    tabBarLabelStyle: {
      fontSize: width * 2.5,
      margin: 0,
    },
    tabBarStyle: {
      backgroundColor:
        colors.red,
      height:
        Platform.OS == 'android' || !DeviceInfo.hasNotch()
          ? height * 7
          : height * 8.8,
      elevation: 0,
      margin: 0,
    },
  };
};

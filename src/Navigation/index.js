import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetPostScreen from '../screens/GetPostScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { getTabNavigationOptions } from './NavigationOptions';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const AuthStack = () => {
  return (
    <Auth.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={LoginScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
    </Auth.Navigator>
  );
};

export const AppStack = () => {
  return (
    <App.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="HomeTabs" component={HomeTabs} />
    </App.Navigator>
  );
};

export const HomeTabs = ({ route }) => {
  return (
    <Tabs.Navigator
      tabBarPosition="bottom"
      initialRouteName={'Home'}
      screenOptions={getTabNavigationOptions}>
      <Tabs.Screen component={HomeScreen} name="Home" />
      <Tabs.Screen component={GetPostScreen} name="Profile" />
    </Tabs.Navigator>
  );
};
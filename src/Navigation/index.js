import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { getTabNavigationOptions } from './NavigationOptions';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CommentsScreen from '../screens/CommentsScreen';
import AllRoutesScreen from '../screens/AllRoutesScreen';
import RouteDetailScreen from '../screens/RouteDetailScreen';
import MembersScreen from '../screens/MembersScreen';
import MessageScreen from '../screens/MessageScreen';
import AllRoutesListScreen from '../screens/AllRoutesListScreen';
import AllRouteDetailScreen from '../screens/AllRouteDetailScreen';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Profile = createNativeStackNavigator();

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
      <App.Screen name="EditProfile" component={EditProfileScreen} />
      <App.Screen name="Comments" component={CommentsScreen} />
      <App.Screen name="AllRoutes" component={AllRoutesScreen} />
      <App.Screen name="RouteDetail" component={RouteDetailScreen} />
      <App.Screen name="Members" component={MembersScreen} />
      <App.Screen name="Message" component={MessageScreen} />
      <App.Screen name="AllRoutesList" component={AllRoutesListScreen} />
      <App.Screen name="AllRouteDetailScreen" component={AllRouteDetailScreen} />
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
      <Tabs.Screen component={ProfileStack} name="ProfileStack" />
    </Tabs.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Profile.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Profile.Screen name="Profile" component={ProfileScreen} />
      {/* <Profile.Screen name="EditProfile" component={EditProfileScreen} /> */}
    </Profile.Navigator>
  );
};
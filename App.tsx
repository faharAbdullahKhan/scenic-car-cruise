import React, { useState, useEffect } from 'react';
import { PersistGate } from 'redux-persist/src/integration/react';
import { store, persistor } from './src/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AuthStack } from './src/Navigation';
import { Provider, useSelector } from 'react-redux';

const Root = createNativeStackNavigator();
const RootStack = () => {
  const token = useSelector(state => state.authReducer.token);
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="AppStack" component={AppStack} />
      {/* {token ? (
      ) : (
        <Root.Screen name="AuthStack" component={AuthStack} />
      )} */}
    </Root.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;

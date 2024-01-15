import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/screens/home/HomeScreen';
import OrderScreen from '../components/screens/order/OrderScreen';
import Login from '../components/screens/auth/login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext, useFetchState} from '../context/Store';
import LogOutScreen from '../components/screens/auth/logout/LogOutScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Logout" component={LogOutScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {state, dispatch} = useFetchState();

  useEffect(() => {
    const fetchUserData = async () => {
      let user_data_stored = await AsyncStorage.getItem('userData');
      console.log('user_data_stored', user_data_stored);
      let user_data_value = JSON.parse(user_data_stored);

      dispatch({
        type: 'USER_AUTH',
        userData: user_data_value,
      });
    };

    fetchUserData();
  }, []);

  return (
    <NavigationContainer>
      {state.userData.isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

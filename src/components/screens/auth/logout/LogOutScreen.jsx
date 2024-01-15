import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useFetchState} from '../../../../context/Store';

const LogOutScreen = () => {
  const {dispatch} = useFetchState();

  const logout = async () => {
    dispatch({
      type: 'LOGOUT_USER',
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOutScreen;

const styles = StyleSheet.create({});

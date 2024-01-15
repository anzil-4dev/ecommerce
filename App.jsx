import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Components
import Navigation from './src/navigation/Navigation';

// Context
import {Provider} from './src/context/Store';

const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

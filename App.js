/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
import Home from './src/Home';

const App: () => React$Node = () => {


  return (
    <>
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </>
  );
};

export default App;

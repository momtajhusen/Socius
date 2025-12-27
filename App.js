// src/App.js
// Main app entry point - Redux + Navigation setup

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/state/redux/store';
import RootNavigator from './src/navigation/RootNavigator';

// Gesture handler
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
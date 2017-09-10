import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithNavigationState from './src/navigators/AppNavigator';
import MyWatchlistApp from './src/reducers'

export default class App extends React.Component {
  store = createStore(MyWatchlistApp);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
};
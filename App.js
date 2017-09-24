import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AppWithNavigationState from './src/navigators/AppNavigator';
import MyWatchlistApp from './src/reducers';

export default class App extends Component {
  store = createStore(
    MyWatchlistApp,
    applyMiddleware(
      thunkMiddleware
    ));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
};
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import configureStore from './src/configureStore';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    const { store } = this.state;
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import StockSelectorScreen from '../containers/StockSelectorScreen';
import WatchlistScreen from '../containers/WatchlistScreen';
import StockDetailsScreen from '../containers/StockDetailsScreen';

export const AppNavigator = StackNavigator(
    {
        StockSelectorScreen: { screen: StockSelectorScreen },
        WatchlistScreen: { screen: WatchlistScreen },
        StockDetailsScreen: { screen: StockDetailsScreen },
    },
    {
        navigationOptions: {
            headerStyle: { marginTop: 24, backgroundColor: 'cornflowerblue' },
            headerTitleStyle: { color: 'white', textAlign: 'center' },
            headerBackTitleStyle: { color: 'white', textAlign: 'center' },
        },
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}        
    />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);  
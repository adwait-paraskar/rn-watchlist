import React from 'react';
import { Platform, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import {
    addNavigationHelpers,
    StackNavigator,
    NavigationActions,
} from 'react-navigation';

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

class AppWithNavigationState extends React.Component {
    componentDidMount() {
        if (Platform.OS === 'android')
            BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        if (Platform.OS === 'android')
            BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav
        });

        return <AppNavigator navigation={navigation} />;
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);  
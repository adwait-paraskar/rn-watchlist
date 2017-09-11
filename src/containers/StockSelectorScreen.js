import React from 'react';
import { connect } from 'react-redux';
import { toggleStock } from '../actions';
import { View, Button } from 'react-native';

import StockSelector from '../components/StockSelector'

const mapStateToProps = state => {
    return {
        stocks: state.stocks,
        watchlist: state.watchlist,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStockClick: id => {
            dispatch(toggleStock(id))
        }
    }
};

const StockSelectorScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockSelector)

export default StockSelectorScreen;

StockSelectorScreen.navigationOptions = ({ navigation }) => {    
    return ({
        headerTitle: 'Select Watchlist',
        headerTitleStyle: {color: 'white', textAlign: 'center'},
        headerRight: (
            <Button
                title={'Done'}
                onPress={
                    () => navigation.dispatch({ type: 'WatchlistScreen' })
                }
            />
        ),
    });
};
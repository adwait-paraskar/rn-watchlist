import React from 'react';
import { connect } from 'react-redux';
import { toggleStock } from '../actions';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        headerTitle: 'Add to Watchlist',        
        headerTitleStyle: {color: 'white', textAlign: 'center'},        
        headerLeft: null,
        headerRight: (
            <Icon.Button
                name={'check'}
                size={30}
                backgroundColor={'cornflowerblue'}
                onPress={
                    () => navigation.dispatch({ type: 'WatchlistScreen' })
                }
            />
        ),
    });
};
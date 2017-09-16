import React from 'react';
import { connect } from 'react-redux';
import Watchlist from '../components/Watchlist';
import Icon from 'react-native-vector-icons/MaterialIcons';

const mapStateToProps = state => {    
    return {
        //move this to reducer
        watchlist: state.stocks.filter(
            (stock) => state.watchlist.includes(stock.id)
        ),
        stockPriceData:state.stockPriceData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStockViewDetails: (item, currentPrice, series) => {
            console.log("sending props to details", series);
            dispatch({ type: 'StockDetailsScreen', params: { item, currentPrice, series } })
        }
    }
};

const WatchlistScreen = connect(    
    mapStateToProps,
    mapDispatchToProps
)(Watchlist);

export default WatchlistScreen;

WatchlistScreen.navigationOptions = ({navigation}) => {
    return ({
        title: 'Watchlist',
        headerLeft: (
            <Icon.Button
                name={'arrow-back'}
                size={25}
                backgroundColor={'cornflowerblue'}
                onPress={
                    () => navigation.goBack()
                }
            />
        ),
    });
};
import React from 'react';
import { connect } from 'react-redux';

import Watchlist from '../components/Watchlist';

const mapStateToProps = state => {
    return {
        watchlist: state.stocks.filter(
            (stock) => state.watchlist.includes(stock.id)
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStockViewDetails: (_id) => {
            dispatch({ type: 'StockDetailsScreen', params: { id: _id } })
        }
    }
};

const WatchlistScreen = connect(    
    mapStateToProps,
    mapDispatchToProps
)(Watchlist);

export default WatchlistScreen;

WatchlistScreen.navigationOptions = () => {
    return ({
        title: 'Watchlist',
    });
};

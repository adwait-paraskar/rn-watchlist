import React from 'react';
import { connect } from 'react-redux';

import Watchlist from '../components/Watchlist';

const mapStateToProps = state => {
    return {
        watchlist: state.watchlist,
    }
};

const WatchlistScreen = connect(
    mapStateToProps,    
)(Watchlist);

export default WatchlistScreen;

WatchlistScreen.navigationOptions = () => {
    return ({
        title: 'Watchlist',
    });
};

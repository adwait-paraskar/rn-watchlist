import React from 'react';
import { connect } from 'react-redux';
import { toggleStock } from '../actions';
import { View, Button } from 'react-native';

import StockSelector from '../components/StockSelector'

const mapStateToProps = state => {
    return {
        stocks: allStocks,
        watchlist: state.watchlist,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStockClick: id => {
            dispatch(toggleStock(id))
        }
    }
}

const StockSelectorScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(StockSelector)

export default StockSelectorScreen;

StockSelectorScreen.navigationOptions = props => {
    return ({
        headerTitle: 'Select Watchlist',
        headerTitleStyle: {color: 'white', textAlign: 'center'},
        headerRight: (
            <Button
                title={'Done'}
                onPress={
                    () => console.log("button pressed")
                }
            />
        ),
    });
};

const allStocks = [
    {
        id: 1,
        name: "Apple Inc",
        ticker: "AAPL",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 2,
        name: "Alphabet Inc",
        ticker: "GOOGL",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 3,
        name: "Microsoft Corporation",
        ticker: "MSFT",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 4,
        name: "Facebook Inc",
        ticker: "FB",
        logo: "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png",

    },
    {
        id: 5,
        name: "Amazon Inc",
        ticker: "AMZN",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 6,
        name: "General Electric Co",
        ticker: "GE",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 7,
        name: "Johnson N Johnson",
        ticker: "JNJ",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 8,
        name: "Exxon Mobil Corp",
        ticker: "XOM",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 9,
        name: "JPMorgan Chase & Co",
        ticker: "JPM",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 10,
        name: "Wells Fargo & Co.",
        ticker: "WFC",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
    {
        id: 11,
        name: "Bank of America Corp.",
        ticker: "BAC",
        logo: "https://facebook.github.io/react/img/logo_og.png",
    },
];
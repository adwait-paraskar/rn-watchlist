import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { fechStockData } from '../actions';
import StockPriceSummary from './StockPriceSummary';

export default class Watchlist extends PureComponent {
    componentDidMount() {
        this.props.watchlist.forEach((item) => {
            this.props.navigation.dispatch(
                fechStockData(item.id, item.ticker)
            );
        });
    };

    render() {
        console.log("Watchlist props", this.props);
        return (
            <FlatList
                data={this.props.watchlist}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ItemSeparatorComponent={this.renderSeparator}
            />
        );
    };

    _keyExtractor = (item, index) => item.id;

    renderSeparator = () => {
        return (
            <View style={{ height: 1, }} />
        );
    };

    _renderItem = ({ item }) => {
        let priceData = this.props.stockPriceData[item.id] || {};
        let currentPrice = priceData.currentPrice;
        let chartData = priceData.chartData;
        
        console.log("###Rendering item", item.ticker);
        return (
            <StockPriceSummary
                onPress={() => this.props.onStockViewDetails(item)}
                {...item}
                dispatch={this.props.navigation.dispatch}
                isFetching={priceData.isFetching}
                currentPrice={currentPrice}                
            />

            //TODO: find if there is better way of sending dispatch than above 
        )
    }

    /*
    //TODO: colocate below with reducer?
    _getCurrentPrice(priceData) {
        let initialState = {
            lastUpdated: '-',
            price: '-',
            changeValue: '-',
            changePcnt: '-',
            source: 'NASDAQ',
        };
        if (!priceData.series)
            return initialState;
        //TODO: refactor this code
        if (priceData.series['Error Message']) {
            console.log("error");
            return { ...initialState, price: "Error" };
        }
        if (!priceData.series['Meta Data'])
            return initialState;

        return this._mapResponseToProps(priceData);
    }

    _getSeriesDataForStock(id) {        
        if (this.props.stockPriceData && this.props.stockPriceData[id])
            return this.props.stockPriceData[id];
        else
            return {};
    }

    _mapResponseToProps(priceData) {
        let lastTradeData = Object.values(priceData.series['Time Series (Daily)'])[0];
        let price = lastTradeData['4. close'];
        let openPrice = lastTradeData['1. open'];
        let change = (price - openPrice).toFixed(2);
        let changePcnt = (change * 100 / openPrice).toFixed(2);
        let lastUpdated = priceData.series['Meta Data']['3. Last Refreshed'];
        return {
            lastUpdated: lastUpdated,
            price: price,
            changeValue: change,
            changePcnt: changePcnt,
            source: 'NASDAQ',
        };
    }
    */
};
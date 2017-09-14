import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { fechStockData } from '../actions';
import StockPriceSummary from './StockPriceSummary';

export default class Watchlist extends PureComponent {
    componentDidMount() {
        console.log("CDM: SPS props", this.props);
        this.props.watchlist.forEach((item) => {
            this.props.navigation.dispatch(fechStockData(item.id, item.ticker));
        });
    };

    render() {
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
        let priceData = this._getSeriesDataForStock(item.id);
        console.log("###Rendering item", item.ticker);
        return (
            <StockPriceSummary
                onPress={() => this.props.onStockViewDetails(item.ticker)}
                {...item}
                dispatch={this.props.navigation.dispatch}
                isFetching={priceData.isFetching}
                currentPrice={this._getCurrentPrice(priceData)}
                series={priceData.series}
            />
            //TODO: find if there is better way of sending dispatch than above 
        )
    }

    _getCurrentPrice(priceData) {
        let initialState= {
            lastUpdated: '-',
            price: '-',
            changeValue: '-',
            changePcnt: '-',
            source: 'NASDAQ',                
        };
        if (!priceData.series || !priceData.series['Meta Data']) 
            return initialState;
        else {
            let lastTradeData = Object.values(priceData.series['Time Series (60min)'])[0];
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
            }
        }
    }

    _getSeriesDataForStock(id) {
        console.log("_getSeriesDataForStock", this.props.stockPriceData);
        if (this.props.stockPriceData && this.props.stockPriceData[id])
            return this.props.stockPriceData[id];
        else
            return {};
    }
};
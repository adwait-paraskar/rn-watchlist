import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import { fechStockData } from '../actions';
import StockPriceSummary from './StockPriceSummary';

export default class Watchlist extends PureComponent {

    componentDidMount() {
        this._fetchData();
    }

    render() {
        return (
            <FlatList
                data={this.props.watchlist}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ItemSeparatorComponent={this._renderSeparator}
                onRefresh={this._fetchData}
                refreshing={this.props.stockPriceData.isRefreshing}
            />
        );
    }

    _keyExtractor = (item, index) => item.id;

    _renderSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: '#CED0CE', }} />
        );
    };

    _renderItem = ({ item }) => {
        let priceData = this.props.stockPriceData[item.id] || {};
        let currentPrice = priceData.currentPrice;
        let chartData = priceData.chartData || [];

        return (
            <StockPriceSummary
                onPress={
                    () => this.props.onStockViewDetails(item, currentPrice, chartData)
                }
                item={item}
                isFetching={priceData.isFetching}
                error={priceData.error}
                currentPrice={currentPrice}
            />
        );
    }

    _fetchData = () => {
        this.props.watchlist.forEach((item) => {
            this.props.navigation.dispatch(fechStockData(item.id, item.ticker));
        });
    }
}

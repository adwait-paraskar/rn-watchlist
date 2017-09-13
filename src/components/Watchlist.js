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
            />
        );
    };

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => {
        let priceData = this._getPriceDataForStock(item.id);
        console.log("###Rendering item", item.ticker);
        return (
            <StockPriceSummary
                onPress={() => this.props.onStockViewDetails(item.ticker)}
                {...item}
                dispatch={this.props.navigation.dispatch}
                isFetching={priceData.isFetching}
                series={priceData.series}
            />
            //TODO: find if there is better way of sending dispatch than above 
        )
    }

    _getPriceDataForStock(id) {
        console.log("_getPriceDataForStock", this.props.stockPriceData);
        if (this.props.stockPriceData && this.props.stockPriceData[id])
            return this.props.stockPriceData[id];
        else
            return {};
    }
};
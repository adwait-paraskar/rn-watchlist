import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
} from 'react-native';

import Stock from './Stock';
import SearchBar from './SearchBar';

export default class StockSelector extends PureComponent {
    constructor(props) {
        super(props);
        this._setInitialState();
    }

    render() {
        return (
            <FlatList
                data={this.state.stockList}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
                ListHeaderComponent={this._renderHeader}
                /*to force FlatList to render, when watchlist changes*/
                extraData={this.props.watchlist}
            />
        );
    };

    _keyExtractor = (item, index) => item.id;

    _renderSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: '#CED0CE', }} />
        );
    };

    _renderHeader = () => {
        return (
            <SearchBar onChangeText={this._filterData} />
        )
    };

    _filterData = ( text ) => {        
        if (text === '')
            this._setInitialState();

        let filteredStocklist = this.props.stocks.filter(
            (item) => {
                return item.ticker.includes(text.toUpperCase()) ||
                    item.name.toLowerCase().includes(text.toLowerCase());
            });
        this.setState({
            stockList: filteredStocklist,
        })
    }

    _renderItem = ({ item }) => (
        <Stock
            onPress={() => this._onPress(item)}
            {...item}
            selected={this.props.watchlist.includes(item.id)}
        />
    );

    _onPress = (item, selected) => {
        console.log("pressed", item);
        this.props.onStockClick(item.id);
    }

    _setInitialState() {
        this.state = {
            stockList: this.props.stocks,
        };
    }
};  
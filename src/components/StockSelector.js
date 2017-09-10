import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, Image } from 'react-native';

import Stock from './Stock';

export default class StockSelector extends PureComponent {
    render() {
        return (
            <FlatList
                data={this.props.stocks}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
                /*to force FlatList to render, when watchlist changes*/
                extraData={this.props.watchlist}
            />
        );
    };

    _keyExtractor = (item, index) => item.id;

    _renderSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "#CED0CE", }} />
        );
    };

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
};
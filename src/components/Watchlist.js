import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import Stock from './Stock';

export default class Watchlist extends PureComponent {
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
    
    _renderItem = ({ item }) => (
        <Stock       
            onPress={() => this.props.onStockViewDetails(item.ticker)}                 
            {...item}
        />
    );
};
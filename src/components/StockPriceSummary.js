import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

class StockPriceSummary extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isFetching !== nextProps.isFetching);
    }

    //TODO: seperate functions or components 
    // for - fetching view , price data 
    // error handling 
    // pull to refresh in watchlist
    render() {
        let { onPress, logo, name, ticker, isFetching, currentPrice, series } = this.props;
        let fetchingText = isFetching ? "Fetching..." : "Fetching DONE";
        let cellStyle = [styles.basicsContainer];
        if (currentPrice.changeValue > 0)
            cellStyle.push(styles.advance);
        if (currentPrice.changeValue < 0)
            cellStyle.push(styles.decline);
        return (
            <TouchableOpacity
                style={styles.stockContainer}
                onPress={onPress}
            >
                <View style={styles.basicsContainer}>
                    <Text style={styles.h1}>{name}</Text>
                    <Text style={styles.h3}>
                        {`Ticker: ${ticker}`}
                    </Text>
                </View>
                <View style={cellStyle}>
                    <Text> {fetchingText} </Text>
                    <Text> {currentPrice.lastUpdated} </Text>
                    <Text> {currentPrice.price} </Text>
                    <Text> {currentPrice.changeValue} </Text>
                </View>

            </TouchableOpacity>
        );
    };
}
export default StockPriceSummary;

const styles = StyleSheet.create({
    stockContainer: {
        flex: 1,
        padding: 10,        
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    basicsContainer: {
        backgroundColor: 'gray',
    },
    h1: {
        fontSize: 16,
    },
    h3: {
        fontSize: 12,
    },
    advance: {
        backgroundColor: 'green'
    },
    decline: {
        backgroundColor: 'red'
    },
    error: {
        backgroundColor: 'orange'
    }
});
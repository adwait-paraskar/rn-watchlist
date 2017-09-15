import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

class StockPriceSummary extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isFetching !== nextProps.isFetching);
    }

    //TODO: seperate functions or components 
    // for - fetching view , price data 
    // error handling 
    render() {
        //TODO: put the details in an object rather than flattening
        //TODO: put up separate methods for rendering fetching view and with data view
        let { onPress, logo, name, ticker, isFetching, currentPrice } = this.props;
        if(!currentPrice){
            return (<View/>);
        }
        let fetchingText = isFetching ? "Fetching..." : "Fetching DONE";
        let cellStyles = [];
        if (currentPrice.changeValue > 0)
            cellStyles.push(styles.advance);
        if (currentPrice.changeValue < 0)
            cellStyles.push(styles.decline);
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
                    <Text style={styles.h3} > {currentPrice.lastUpdated} </Text>
                </View>
                <View style={styles.basicsContainer}>
                    <Text> {fetchingText} </Text>                    
                    <Text style={[...cellStyles, styles.h1]}> {currentPrice.price} </Text>
                    <Text style={[...cellStyles, styles.h1]}> {currentPrice.changeValue} </Text>                                        
                    <Text style={[...cellStyles, styles.h1]}> {currentPrice.changePcnt} </Text>                    
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
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
    basicsContainer: {
        flex: 1,
    },
    h1: {
        fontSize: 16,
    },
    h3: {
        fontSize: 12,
    },
    advance: {
        color: 'green'
    },
    decline: {
        color: 'red'
    },
    error: {
        color: 'orange'
    }
});
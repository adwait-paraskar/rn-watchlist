import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class StockPriceSummary extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isFetching !== nextProps.isFetching);
    }

    //TODO: seperate functions or components 
    // for - fetching view , price data 
    // error handling 
    render() {
        //TODO: put up separate methods for rendering fetching view and with data view
        let { logo, name, ticker } = this.props.item;
        let { onPress, currentPrice } = this.props;
        if (!currentPrice) {
            return (<View />);
        }
        console.log("current Price", currentPrice);

        let updated = currentPrice.updated || '-';
        return (
            <TouchableOpacity
                style={styles.stockContainer}
                onPress={onPress}
            >
                <View style={styles.basicsContainer}>
                    <Text style={styles.h1}>{name}</Text>
                    <Text style={styles.h3}>
                        {`${ticker} | ${updated}`}
                    </Text>
                </View>

                <View style={styles.priceContainer}>
                    {this._renderPrice()}
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="navigate-next" size={30} color="gray" />
                </View>
            </TouchableOpacity>
        );
    };

    _renderPrice() {
        let { currentPrice, isFetching, } = this.props;
        if (isFetching)
            return (<ActivityIndicator />);

        let cellStyles = [styles.h3, styles.price];
        if (currentPrice.change > 0)
            cellStyles.push(styles.advance);
        if (currentPrice.change < 0)
            cellStyles.push(styles.decline);
        return (
            <View>
                <Text style={[styles.h1, styles.price]}>{currentPrice.price}</Text>
                <Text style={[...cellStyles]}>
                    {`${currentPrice.change} (${currentPrice.changePcnt})`}
                </Text>
            </View>
        )
    }
};

export default StockPriceSummary;

const styles = StyleSheet.create({
    stockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    basicsContainer: {
        flex: 8,
    },
    priceContainer: {
        flex: 4,
    },
    iconContainer:{
        flex: 1,
    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 14,
    },
    price: {
        textAlign: 'right',
        fontWeight: 'bold',
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
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const Stock = ({ onPress, logo, name, ticker, selected }) => {    
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                flexDirection: 'row',
                padding: 10,
                backgroundColor: selected ? 'green' : 'white',
            }}
            onPress={onPress}
        >
            <View>
                <Image
                    style={styles.logo}
                    source={{ uri: logo }}
                />
            </View>

            <View style={styles.basicsContainer}>
                <Text style={styles.h1}>{name}</Text>
                <Text style={styles.h3}>
                    {`Ticker: ${ticker}`}
                </Text>
            </View>

        </TouchableOpacity>
    );
};

export default Stock;

const styles = StyleSheet.create({
    StockContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    basicsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    logo: {
        width: 40,
        height: 40
    },
    h1: {
        fontSize: 22,
    },
    h3: {
        fontSize: 12,
    },
    selected: {
        backgroundColor: 'lightgreen',
    }
});
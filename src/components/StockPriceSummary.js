import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

class StockPriceSummary extends Component {
    shouldComponentUpdate(nextProps, nextState){
        console.log("PREV", this.props.isFetching);
        console.log("NEXT", nextProps.isFetching);
        console.log("###will return", this.props.isFetching !== nextProps.isFetching);
        return (this.props.isFetching !== nextProps.isFetching);
    }

    render() {
        let { onPress, logo, name, ticker, isFetching, series = {} } = this.props;
        let fetchingText = isFetching ? "Fetching..." : "Fetching DONE";         
        let lastUpdated = series['Meta Data'] 
            ? series['Meta Data']['3. Last Refreshed']
            : "-";
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: 10,                    
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
                    <Text> {fetchingText} </Text>
                    <Text> {lastUpdated} </Text>

                </View>

            </TouchableOpacity>
        );
    };
}
export default StockPriceSummary;

const styles = StyleSheet.create({
    StockContainer: {
        flex: 1,        
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
        fontSize: 20,
    },
    h3: {
        fontSize: 12,
    },
    selected: {
        backgroundColor: 'lightgreen',
    }
});
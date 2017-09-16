import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SeriesChart from './SeriesChart';

class StockDetails extends Component {
    render() {
        let { name, ticker } = this.props.item;
        let { price, change, updated, changePcnt, high, low, volume } = this.props.currentPrice;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.h1}>
                        {`${name} (${ticker})`}
                    </Text>
                </View>
                <View style={styles.basicsContainer}>
                    <View>
                        <Text> {`Last Traded: ${price}`} </Text>
                        <Text> {`Change: ${change} (${changePcnt}%)`} </Text>
                        <Text> {`Updated: ${updated}`} </Text>
                    </View>
                    <View>
                        <Text> {`High: ${high}`} </Text>
                        <Text> {`Low: ${low}`} </Text>
                        <Text> {`Volume: ${volume}`} </Text>
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: "#CED0CE", }} />
                <View style={styles.chartContainer}>
                    {this._renderChart()}
                </View>
            </View>
        );
    }

    _renderChart() {
        if (this.props.series) {
            console.log("rendering chart");
            return (
                <SeriesChart
                    item={this.props.item}
                    series={this.props.series.series}
                    labels={this.props.series.labels}
                />
            )
        }
        return {};
    }
}
export default StockDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'flex-start',

    },
    basicsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    chartContainer: {
        flex: 1,

        padding: 1,

    },
    h1: {
        fontSize: 18,
        textAlign: 'center',
    },
});
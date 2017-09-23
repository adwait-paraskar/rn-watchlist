import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import SeriesChart from './SeriesChart';
import NameValueText from './NameValueText';

class StockDetails extends Component {
    render() {
        let { name, ticker } = this.props.item;
        let { price, change, updated, changePcnt, high, low, volume } = this.props.currentPrice;
        return (
            <View style={styles.container}>
                <View style={styles.basicsContainer}>
                    <View>
                        <NameValueText name={'Last Traded'} value={price} />                      
                        <NameValueText name={'Change'} value={`${change} (${changePcnt}%)`} />
                        <NameValueText name={'Updated'} value={updated} />
                    </View>
                    <View>
                        <NameValueText name={'High'} value={high} />      
                        <NameValueText name={'Low'} value={low} />
                        <NameValueText name={'Volume'} value={volume} />                
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
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    chartContainer: {
        flex: 1,
        padding: 1,
        alignSelf: 'stretch',
    },
    h1: {
        fontSize: 18,
        textAlign: 'center',
    },
});
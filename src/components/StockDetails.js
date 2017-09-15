import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SeriesChart from './SeriesChart';

class StockDetails extends Component {
    render() {
        console.log("STOCKDETAILS",this.props);
        return (
            <View style={styles.container}>
                <View>
                    <Text> Stock details screen </Text>
                    <Text> {this.props.item.id} </Text>
                    <Text> {this.props.currentPrice.price} </Text>
                </View>
                <View style={styles.chartContainer}>
                    {this._renderChart()}
                </View>
            </View>
        );
    }

    _renderChart() {        
        if(this.props.series){
            console.log("rendering chart");
            return (
                <SeriesChart 
                    item= {this.props.item}
                    series= {this.props.series.series}
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
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    chartContainer: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 1,
    },
    header: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
});
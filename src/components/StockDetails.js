import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SeriesChart from './SeriesChart';

class StockDetails extends Component {
    render() {
        console.log("STOCKDETAILS",this.props);
        return (
            <View>
                <View>
                    <Text> Stock details screen </Text>
                    <Text> {this.props.item.id} </Text>
                    <Text> {this.props.currentPrice.price} </Text>
                </View>
                <View>
                    {this._renderChart()}
                </View>
            </View>
        );
    }

    _renderChart() {
        if(this.props.series){
            return (
                <SeriesChart 
                    item= {this.props.item}
                    series= {this.props.series}
                />
            )
        }
        return {};
    }
}
export default StockDetails;
import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryLine } from 'victory-native';

class SeriesChart extends Component {
    _showHeader() {
        return (
            <Text style={styles.header}>
                Daily Series
            </Text>
        );
    };

    _renderChart() {
        let data = this.props.series;        
        //TODO:domain should come from config or user selection
        return (
            <View style={styles.chartContainer}>
                <VictoryChart
                    domain={{ x: [0, 9], }}
                    domainPadding={{y:20}}
                >
                    <VictoryGroup
                        height={300}
                        data={data} >
                        <VictoryLine
                            interpolation="cardinal"
                            style={{
                                data: {
                                    stroke: "cornflowerblue",
                                    strokeWidth: 3
                                },
                                labels: { fontSize: 12 }
                            }}
                            animate={{ duration: 1500 }}
                            categories={{x:this.props.labels}}  
                        />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        );
    };

    render() {
        console.log("-----over to chart" + new Date().toLocaleString('en-US'));
        ///TODO: stack with last close shown in a line
        return (
            <View style={styles.container}>
                <View>{this._showHeader()}</View>
                <View>{this._renderChart()}</View>
            </View>
        );
    };
}
export default SeriesChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',        
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chartContainer: {
        flex: 1,        
        padding: 1,
    },
    header: {
        fontSize: 18,
        paddingTop: 20,
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryLine } from 'victory-native';

class SeriesChart extends Component {
    //TODO: move to reducer
    _filterChartDataForToday(data, valueKey) {
        return Object.keys(data)
            .slice(0, 6)
            .map((key) => {
                let value = parseFloat(data[key][valueKey]);
                let hour = key.substring(11, 13);
                console.log("adding key " + hour + "value " + value);
                return { x: parseInt(hour), y: value };
            });
    };

    _makeChartData(sourceData) {
        let closeData = this._filterChartDataForToday(sourceData, "4. close");
        console.log("###### close data ", closeData);
    };

    _showHeader() {
        return (
            <Text style={styles.header}>
                Hourly Chart
            </Text>
        );
    };

    _renderChart() {
        let data= this._makeChartData(this.props.series);
        console.log("chart data",data);
        return (
            <View style={styles.chartContainer}>
                <VictoryChart domain={{ x: [10, 16], }}>
                    <VictoryGroup height={300} data={data} >
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
                        />
                    </VictoryGroup>
                </VictoryChart>
            </View>
        );
    };

    render() {
        console.log("-----over to chart" + new Date().toLocaleString('en-US'));
        //TODO: dynamic Y domain 
        ///TODO: stack with last close shown in a line
        return (
            <View style={styles.container}>
                {this._showHeader()}
                {this._renderChart()}
            </View>
        );
    };
}
export default SeriesChart;

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
import React, { Component } from 'react';
import { NO_OF_PAST_DAYS_INDEX } from '../actions/constants';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    VictoryChart,
    VictoryGroup,
    VictoryLine,
    VictoryTheme,
} from 'victory-native';

class SeriesChart extends Component {
    render() {
        let data = this.props.series;
        let open = this.props.open;
        return (
            <View style={styles.container}>
                <View>{this._showHeader()}</View>                
                <View>{data && this._renderChart(data,open)}</View>
            </View>
        );
    };

    _showHeader() {
        return (
            <Text style={styles.header}>Daily Series</Text>
        );
    };

    _renderChart(data, open) {    
        let openData = [
            {x:0, y:parseFloat(open)},
            {x:NO_OF_PAST_DAYS_INDEX, y:parseFloat(open)},
        ];

        //TODO:domain should come from config or user selection
        return (
            <ScrollView>
                <View style={styles.chartContainer}>
                    <VictoryChart
                        domain={{ x: [0, 9], }}
                        domainPadding={{ x: 1, y: 20 }}
                        theme={VictoryTheme.material}
                    >
                        <VictoryGroup>
                            <VictoryLine
                                data={data}
                                interpolation='cardinal'
                                style={{
                                    data: {
                                        stroke: 'cornflowerblue',
                                        strokeWidth: 3
                                    },
                                }}
                                animate={{ duration: 1500, delay: 500 }}
                                categories={{ x: this.props.labels }}
                            />

                            <VictoryLine
                            data={openData}
                            style={{
                                data: {
                                    stroke: 'green',
                                    strokeWidth: 3,
                                },
                            }}
                            categories={{ x: this.props.labels }}
                        />

                        </VictoryGroup>
                    </VictoryChart>
                </View>
            </ScrollView>
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
});
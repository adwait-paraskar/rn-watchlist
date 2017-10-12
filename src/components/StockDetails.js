import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SeriesChart from './SeriesChart';
import NameValueText from './NameValueText';
import Icon from 'react-native-vector-icons/MaterialIcons';

class StockDetails extends Component {
    render() {
        if (!this.props.currentPrice){
            return null;
        }
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                {this._renderSeparator()}
                {this._renderBasics()}
                {this._renderUpdated()}
                {this._renderSeparator()}
                {this._renderChart()}
            </View>
        );
    }

    _renderHeader() {
        let {
            price,
            change,
            changePcnt
        } = this.props.currentPrice;
        let cellStyles = [styles.h2, styles.price];
        let changeIcon = 'code';
        if (change > 0) {
            cellStyles.push(styles.advance);
            changeIcon = 'arrow-upward';
        }
        if (change < 0) {
            cellStyles.push(styles.decline);
            changeIcon = 'arrow-downward';
        }

        return (
            <View style={styles.basicsContainer}>
                <Text style={[styles.h1]}>{price}</Text>
                <Icon name={changeIcon} size={25} color="gray" />
                <Text style={[...cellStyles]}> {change} </Text>
                <Text style={[...cellStyles]}> {`(${changePcnt}%)`} </Text>
            </View>
        );
    }

    _renderBasics() {
        let {
            open,
            high,
            low,
            volume
        } = this.props.currentPrice;

        return (
            <View style={styles.basicsContainer}>
                <View style={{ flex: 1 }}>
                    <NameValueText name={'Open'} value={open} />
                    <NameValueText name={'High'} value={high} />
                </View>
                <View style={{ flex: 1 }}>
                    <NameValueText name={'Low'} value={low} />
                    <NameValueText name={'Volume'} value={volume} />
                </View>
            </View>
        );
    }

    _renderUpdated() {
        let { updated } = this.props.currentPrice;
        return (
            <View style={styles.basicsContainer}>
                <Text style={styles.h3}>NASDAQ </Text>
                <Icon name="access-time" size={10} color="gray" />
                <Text style={styles.h3}> {updated}  </Text>
            </View>
        );
    }

    _renderSeparator() {
        return (
            <View style={{ height: 1, backgroundColor: '#CED0CE', }} />
        );
    }

    _renderChart() {
        if (this.props.series) {
            return (
                <View style={styles.chartContainer}>
                    <SeriesChart
                        item={this.props.item}
                        series={this.props.series.series}
                        labels={this.props.series.labels}
                        open={this.props.currentPrice.open}
                    />
                </View>
            );
        }
        return null;
    }
}
export default StockDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    basicsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingVertical: 5,
        paddingLeft: 10,
    },
    chartContainer: {
        flex: 1,
        padding: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f7f7f7',
    },
    h1: {
        fontSize: 28,
    },
    h2: {
        fontSize: 18,
    },
    h3: {
        fontSize: 12,
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
});

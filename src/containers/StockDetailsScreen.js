import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import StockDetails from '../components/StockDetails';

const mapStateToProps = state => {    
    let selectedRoute = state.nav.routes[state.nav.index];
    let props = (selectedRoute.params) ?
        selectedRoute.params
        : {item:{}, currentPrice:{}, series:{}};
    //this will be empty during "back" navigation 
    //TODO: can it be moved to reducer?
    console.log("props in SDS", props);
    return {
        item: props.item,
        currentPrice: props.currentPrice,
        series: props.series,
    }
};

StockDetailsScreen = connect(
    mapStateToProps
)(StockDetails);

export default StockDetailsScreen;

StockDetailsScreen.navigationOptions = () => {
    return ({
        title: 'Stock details',
    });
};

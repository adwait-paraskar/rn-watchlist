import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const StockDetailsScreen = ({ id }) => {
    console.log("Stockdetailscreen props", id);
    return (
        <View>
            <Text> Stock details screen </Text>
            <Text> {id} </Text>
        </View>
    );
};

const mapStateToProps = state => {    
    let selectedRoute = state.nav.routes[state.nav.index];
    let props = (selectedRoute.params) ?
        selectedRoute.params
        : {};
    //this will be empty during "back" navigation 
    return {
        ...props
    }
};

StockDetailsScreen = connect(
    mapStateToProps
)(StockDetailsScreen);

export default StockDetailsScreen;

StockDetailsScreen.navigationOptions = () => {
    return ({
        title: 'Stock details',
    });
};

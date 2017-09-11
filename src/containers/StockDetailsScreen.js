import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const StockDetailsScreen = ({id}) => {
    console.log("Stockdetailscreen props", id);    
    return (
        <View>
            <Text> Stock details screen </Text>
            <Text> {id} </Text>
        </View>
    );
};

const mapStateToProps = state => {
    console.log("<<<<Stockdetailscreen state id", state.showDetailsOf);  
    return {
        id: state.showDetailsOf.id,        
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

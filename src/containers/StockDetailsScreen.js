import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import StockDetails from '../components/StockDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';

const mapStateToProps = state => {    
    let selectedRoute = state.nav.routes[state.nav.index];
    let props = (selectedRoute.params) ?
        selectedRoute.params
        : {item:{}, currentPrice:{}, series:{}};
    //this will be empty during "back" navigation 
    //TODO: can it be moved to reducer?
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

StockDetailsScreen.navigationOptions = ({ navigation }) => {    
    let stockName= navigation.state.params.item.name || 'Stock Details';
    return ({
        title: stockName,
        headerLeft: (
            <Icon.Button
                name={'arrow-back'}
                size={25}
                backgroundColor={'cornflowerblue'}
                onPress={
                    () => navigation.goBack()
                }
            />
        ),
    });
};

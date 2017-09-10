import React from 'react';
import { View, Text, Button } from 'react-native';

const StockDetailsScreen = () => (
    <View>
        <Text> Stock details screen </Text>
    </View>
);

export default StockDetailsScreen;

StockDetailsScreen.navigationOptions = () => {
    return ({
        title: 'Stock details',
    });
};

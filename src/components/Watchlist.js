import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const Watchlist = ({ navigation, watchlist, onStockViewDetails }) => {
    console.log("Watchlist props", navigation);
    console.log("Watchlist watchlist", watchlist);
    return (
        <View>
            <Text> Watchlist screen </Text>
            <Button
                onPress={
                    () => onStockViewDetails(5)
                }
                title="Go to details"
            />
        </View>
    );
};
export default Watchlist;
import React from 'react';
import { View, Text, Button } from 'react-native';

const Watchlist = ({ navigation, watchlist }) => {
    console.log("Watchlist props", navigation);
    console.log("Watchlist watchlist", watchlist);
    return (
        <View>
            <Text> Watchlist screen </Text>
            <Button
                onPress={
                    () => {
                        console.log("button clicked");
                        navigation.dispatch({ type: 'StockDetailsScreen' })
                    }
                }
                title="Go to details"
            />
        </View>
    );
};
export default Watchlist;
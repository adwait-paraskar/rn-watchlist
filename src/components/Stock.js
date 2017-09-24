import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text, 
    Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stock = ({ onPress, logo, name, ticker, selected }) => {
    return (
        <TouchableOpacity
            style={styles.stockContainer}
            onPress={onPress}
        >
            <View>
                <Image
                    style={styles.logo}
                    source={{ uri: logo }}
                />
            </View>

            <View style={styles.basicsContainer}>
                <Text style={styles.h1}>{name}</Text>
                <Text style={styles.h3}>
                    {`Ticker: ${ticker}`}
                </Text>
            </View>

            <View style={styles.iconContainer}>
                {selected ?
                    <Icon name="check-circle" size={25} color="green" />
                    :
                    <Icon name="add-circle-outline" size={25} color="gray" />
                }
            </View>

        </TouchableOpacity>
    );
};

export default Stock;

const styles = StyleSheet.create({
    stockContainer: {
        flex: 1,
        flexDirection: 'row',        
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    basicsContainer: {                
        flex: 5,
        padding: 10,
    },
    iconContainer: {                
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40
    },
    h1: {
        fontSize: 22,        
    },
    h3: {
        fontSize: 12,
    },
});
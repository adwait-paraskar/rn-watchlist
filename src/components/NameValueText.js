import React, { Component } from 'react';
import { Text, View } from 'react-native';

class NameValueText extends Component {
    render() {
        console.log("props", this.props)
        let { name, value } = this.props;
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 14 }}>
                    {`${name}: `}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                    {value}
                </Text>
            </View>
        )
    }
}
export default NameValueText;
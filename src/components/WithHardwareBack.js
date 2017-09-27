/*
    A simple higher order component for biding back to hardware press
    TODO: for specific back actions, can provide 
    callback functions to components thru props
*/

import React, { Component } from 'react';
import { BackHandler } from 'react-native';

function withHardwareBack(WrappedComponent, navigationOptions) {

    class Wrapper extends Component {
        componentDidMount() {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPress);
        }

        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPress);
        }

        handleBackButtonPress = () => {
            this.props.navigation.goBack();
            return true;
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    Wrapper.navigationOptions = navigationOptions;

    return Wrapper;
}

export default withHardwareBack;
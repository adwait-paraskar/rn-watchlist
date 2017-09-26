import React, { Component } from 'react';
import { BackHandler } from 'react-native';

function withHardwareBack(WrappedComponent) {
    return class extends React.Component{
        componentDidMount() {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPress);
        }

        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPress);
        }

        handleBackButtonPress = () => {
            const { goBack } = this.props.navigation;
            goBack();
        }

        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
}
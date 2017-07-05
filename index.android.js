/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

import Header from './components/Header';
import Navigation from './components/Navigation';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }

});

export default class GolbNativeClient extends Component
{
    state = {
        navi: false
    }

    onPressHeaderBarButton ()
    {
        this.setState({navi: !this.state.navi});
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <Header onPressBarButton={this.onPressHeaderBarButton.bind(this)} />
                <Navigation show={this.state.navi} />
            </View>
        );
    }
}

AppRegistry.registerComponent('GolbNativeClient', () => GolbNativeClient);

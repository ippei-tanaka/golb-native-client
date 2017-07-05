import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#559922',
        width: '100%',
        height: 50,
        padding: 10
    },

    icon: {
        color: '#ffffff',
        fontSize: 30
    }
});

export default ({onPressBarButton}) =>
{
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={onPressBarButton}>
                <Icon name="bars" style={styles.icon}/>
            </TouchableNativeFeedback>
        </View>
    );
}
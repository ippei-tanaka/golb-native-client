import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#559922',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        color: '#ffffff',
        fontSize: 30,
        padding: 10
    }
});

export default ({onPressBarButton}) =>
{
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={onPressBarButton}>
                <Icon name="bars" style={styles.icon}/>
            </TouchableHighlight>
        </View>
    );
}
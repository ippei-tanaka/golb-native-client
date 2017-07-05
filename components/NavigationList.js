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
        backgroundColor: '#333333',
        flex: 1,
        flexDirection: 'column'
    },

    buttonContent:
    {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#444444'
    },

    icon: {
        color: '#666666',
        fontSize: 20,
        paddingLeft: 12,
        paddingRight: 12,
        width: 50
    },

    label:
    {
        color: '#ffffff',
        fontSize: 17
    }
});

export default ({width = 250}) =>
{
    return (
        <View style={{width, ...StyleSheet.flatten(styles.container)}}>
            <TouchableNativeFeedback>
                <View style={styles.buttonContent}>
                    <Icon name="home" style={styles.icon}/>
                    <Text style={styles.label}>Home</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.buttonContent}>
                    <Icon name="newspaper-o" style={styles.icon}/>
                    <Text style={styles.label}>Posts</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.buttonContent}>
                    <Icon name="users" style={styles.icon}/>
                    <Text style={styles.label}>Users</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.buttonContent}>
                    <Icon name="object-group" style={styles.icon}/>
                    <Text style={styles.label}>Categories</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.buttonContent}>
                    <Icon name="gear" style={styles.icon}/>
                    <Text style={styles.label}>Settings</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}
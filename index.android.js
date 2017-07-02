/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
/*
<FlatList data={data} renderItem={({item}) => (
                    <Text>{item.key}</Text>
                )} />
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
 */
export default class GolbNativeClient extends Component {
    render ()
    {
        const data = [
            {
                key: "love"
            }
        ];
        const myIcon = (<Icon name="rocket" size={30} color="#900" />)

        return (
            <View style={styles.container}>
                <Button
                    onPress={() => alert(123)}
                    title="User List"
                    color="#ffffff"
                    accessibilityLabel="Show the user list"
                />
                {myIcon}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('GolbNativeClient', () => GolbNativeClient);

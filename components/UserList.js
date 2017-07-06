import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }

});

export default () =>
{
    return (
        <View style={styles.container}>
            <Text>User List</Text>
        </View>
    );
}
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    withRouter
} from 'react-router-native';

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

class NavigationList extends Component
{
    render ()
    {
        const {width, onPress} = this.props;

        return (
            <View style={{width, ...StyleSheet.flatten(styles.container)}}>
                <NaviButton
                    label="Home"
                    path="/"
                    iconName="home"
                    onPress={onPress} />
                <NaviButton
                    label="Posts"
                    path="/posts"
                    iconName="newspaper-o"
                    onPress={onPress} />
                <NaviButton
                    label="Users"
                    path="/users"
                    iconName="users"
                    onPress={onPress} />
                <NaviButton
                    label="Categories"
                    path="/categories"
                    iconName="object-group"
                    onPress={onPress} />
                <NaviButton
                    label="Settings"
                    path="/settings"
                    iconName="gear"
                    onPress={onPress} />
            </View>
        );
    }
}

const _NaviButton = ({iconName, label, path, onPress, history}) =>
{
    let prevented = false;

    const event = {
        path,
        label,
        preventDefault: () => { prevented = true }
    };

    const onPressHandler = () =>
    {
        onPress(event);

        if (!prevented)
        {
            history.push(path);
        }
    };

    return (
        <TouchableHighlight onPress={onPressHandler}>
            <View style={styles.buttonContent}>
                <Icon name={iconName} style={styles.icon}/>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableHighlight>
    );
};

const NaviButton = withRouter(_NaviButton);

export default NavigationList;
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

import {
    NativeRouter,
    Route,
    Link
} from 'react-router-native';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import UserList from './components/UserList';

const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    headerContainer:
    {
        height: 50
    },

    contentContainer:
    {
        flex: 1,
        backgroundColor: "#ffff00"
    },

    menuContainer:
    {
        position: 'absolute',
        top: 50,
        width: 0,
        height: '100%'
    }
});

export default class GolbNativeClient extends Component {

    state = {
        navi: false
    }

    onPressHeaderBarButton ()
    {
        this.setState({navi: !this.state.navi});
    }

    onPressNavigation ()
    {
        this.setState({navi: false});
    }

    render ()
    {
        return (
            <NativeRouter>
                <View style={styles.root}>
                    <View style={styles.headerContainer}>
                        <Header onPressBarButton={this.onPressHeaderBarButton.bind(this)}/>
                    </View>
                    <View style={styles.contentContainer}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/users" component={UserList}/>
                    </View>
                    <View style={styles.menuContainer}>
                        <Navigation onPressNaviButton={this.onPressNavigation.bind(this)}
                                    show={this.state.navi}/>
                    </View>
                </View>
            </NativeRouter>
        );
    }
}

AppRegistry.registerComponent('GolbNativeClient', () => GolbNativeClient);

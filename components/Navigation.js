import React, {Component} from 'react';

import {
    View,
    Animated
} from 'react-native';

import NavigationList from './NavigationList';

const WIDTH = 250;
const ANIMATION_DURATION = 500;

export default class Navigation extends Component
{
    state = {
        offsetLeft: new Animated.Value(-WIDTH)
    }

    shouldComponentUpdate (nextProps)
    {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(nextProps)
    {
        if (nextProps.show)
        {
            Animated.timing(
                this.state.offsetLeft,
                {
                    toValue: 0,
                    duration: ANIMATION_DURATION
                }
            ).start();
        } else {
            Animated.timing(
                this.state.offsetLeft,
                {
                    toValue: -WIDTH,
                    duration: ANIMATION_DURATION
                }
            ).start();
        }
    }

    render ()
    {
        return (
            <Animated.View
                style={{
                    width: WIDTH,
                    height: '100%',
                    left: this.state.offsetLeft
                }}>
                <NavigationList />
            </Animated.View>
        );
    }
}
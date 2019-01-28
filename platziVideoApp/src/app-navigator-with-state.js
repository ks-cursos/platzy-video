import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import {
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import { BackHandler } from "react-native"
import { NavigationActions } from "react-navigation"
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');
//ReduxifyApp
class AppNavigatorWithState extends ReduxifyApp {
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress");
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.dispatch(
            NavigationActions.back({
                key:null
            })
        )
        return true;
    }

}
function mapStateToProps(state) {
    return {
        state: state.nav
    }
}
export default connect(mapStateToProps)(AppNavigatorWithState)
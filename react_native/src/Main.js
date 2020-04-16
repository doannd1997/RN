import React, { Component } from 'react';
import createStore from './store/createStore';
import AppContainer from './AppContainer/Index'

import { View, Text } from 'react-native';

// const layoutStyles = require("./Screen/Main.style").default;

export default class Main extends Component {
    renderApp() {
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
            <AppContainer store={store}>
            </AppContainer>
        )

    }

    render() {
        return this.renderApp();
    }
}
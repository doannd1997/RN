import React, { Component } from 'react';
import createStore from './Store/CreateStore';
import Appcontainer from './AppContainer'

import { View, Text } from 'react-native';

const layoutStyles = require("./Screen/Main.style").default;

export default class Main extends Component {
    renderApp() {
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
            <Appcontainer store={store}>
            </Appcontainer>
        )

    }

    render() {
        return this.renderApp();
    }
}
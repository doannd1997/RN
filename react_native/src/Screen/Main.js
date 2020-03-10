import React, { Component } from 'react';
import { View, Text } from 'react-native';

const layoutStyles = require("./Main.style").default;

export default class Main extends Component{
    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const stoer = createStore(initialState);
    }

    render(){
        return this.renderApp();
    }
}
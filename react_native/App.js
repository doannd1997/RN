/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

const Module = require("./src/modules/login/Screen/LoginHome").default;


class App extends Component {
  render(){
    return <Module/>
  }
}

export default App;

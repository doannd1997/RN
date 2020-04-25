/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

const InitialScript = require("./src/initial/script").default;
InitialScript.init();

const Screen = require("./src/modules/loading/screen/loadingscreen").default;


class App extends Component {
  render(){
    return <Screen/>
  }
}

export default App;

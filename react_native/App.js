/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

const Module = require("~/JavaScript/Redux/Demo_3/App").default;

const r = require("~/res/TryImport/Run").default;


class App extends Component {
  render(){
    r();
    return <Module/>
  }
}

export default App;

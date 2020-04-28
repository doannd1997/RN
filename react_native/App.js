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

const LoadingScreen = require("./src/modules/loading/screen/loadingscreen").default;
const MainScreen = require("./src/modules/main/screen/MainScreen").default;

class App extends Component {
  state= {
    loading: true
  }
  componentWillMount(){
      var self = this;
      setTimeout(()=>{
        self.setState((state)=>{
          return {loading: false}
        });
      }, 3000)
  }
  render(){
    if (this.state.loading == true)
        return (
          <LoadingScreen/>
        )
    else
        return (
          <MainScreen/>
        )
  }
}

export default App;

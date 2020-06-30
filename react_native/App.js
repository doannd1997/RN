/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Dimensions} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import Initial from './src/data/Initial';

const LoadingScreen = require("./src/modules/loading/screen/loadingscreen").default;
const MainScreen = require("./src/modules/main/screen/MainScreen").default;
// const MainScreen = require("./JavaScript/Redux/Demo_2/App").default;


console.disableYellowBox = true

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 180});

const setLoadingToTrue = function(component){
  component.setState((state)=>{
    return {loading: state}
  });
}

class App extends Component {
  state= {
    loading: true
  }
  componentWillMount(){
      var self = this;
      Initial.initAll(()=>{
        setLoadingToTrue(self);
      });
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

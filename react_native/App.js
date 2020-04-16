import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Main = require("~s/Main").default;

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class App extends Component{
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Main { ...this.props } />
      </View>
    )
  }
}
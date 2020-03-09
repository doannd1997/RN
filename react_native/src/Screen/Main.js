import React, { Component } from 'react';
import { View, Text } from 'react-native';

const layoutStyles = require("./Main.style").default;

export default class Main extends Component{
    render(){
        return <View style = { layoutStyles.fullCenter }>
            <Text>
                Hello World
            </Text>
        </View>
    }
}
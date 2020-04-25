import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const asyncStore = require("../../../storage/asyncStore").default;

export default class LoginHome extends Component{
    conponentWillMount(){

    };
    render(){
        return (
            <View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
})
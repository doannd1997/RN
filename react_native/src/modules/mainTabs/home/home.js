import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Image } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeScreenComponent = require("../../home/screen/HomeScreen").default;
const MainLogInComponent = require("../../login/Screen/LogInScreen").default;

class App extends Component{
    render(){
        return  (
            <Stack.Navigator
                mode="modal"
                headerMode="none"
            >
                <Stack.Screen 
                    name = "HomeScreen" 
                    component = { HomeScreen }
                    options = { {title: "Màn hình chính"} }
                />
                <Stack.Screen 
                    name = "MainLogin" 
                    component = { MainLogin }
                    // options = { {title: "Màn hình chính"} }
                />
            </Stack.Navigator>
        )
        
    }
};


function HomeScreen({ route, navigation }){
    return (
        <View style={styles.fullScreen}>
            <HomeScreenComponent nav={{route: route, navigation: navigation}}></HomeScreenComponent>
        </View>
    )
};

function MainLogin({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <MainLogInComponent nav={{route: route, navigation: navigation}}></MainLogInComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redScreen: {
        backgroundColor: 'red'
    },
    blueScreen: {
        backgroundColor: 'blue'
    }
});

export default App;
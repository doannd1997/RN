import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Image, SafeAreaView } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const HomeScreenComponent = require("../../home/screen/HomeScreen").default;
const MainLogInComponent = require("../../logInMain/screen/LogInScreen").default;
const GetInfoLogInComponent = require("../../logInGetInfo/screen/GetInfoLogInScreen").default;
const ForgetPasswordComponent = require("../../logInForgetPassword/screen/ForgetPasswordScreen").default;
const ChildrenTrackingComponent = require("../../childrenTracking/screen/ChildrenTracking").default;
const ReportAbsenceComponent = require("../../reportAbsence/screen/ReportAbsence").default;
const RegisterServiceComponent = require("../../registerService/screen/RegisterServiceComponent").default;
const ChangeServiceComponent = require("../../changeService/screen/ChangeServiceComponent").default;

class App extends Component{
    render(){
        return (
          <NavigationContainer>
            <Stack.Navigator mode="modal" headerMode="none">
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                navigationOptions={{
                  tabBarVisible: false,
                }}
                // options = { {title: "Màn hình chính"} }
              />
              <Stack.Screen
                name="MainLogin"
                component={MainLogin}
                // options = { {title: "Màn hình đăng nhập"} }
              />
              <Stack.Screen
                name="GetInfoLogin"
                component={GetInfoLogin}
                // options = { {title: "Màn hình lấy thông tin đăng nhập"} }
              />
              <Stack.Screen
                name="FogetPassword"
                component={ForgetPassword}
                // options = { {title: "Màn hình quên mật khẩu"} }
              />
              <Stack.Screen
                name="ChildrenTracking"
                component={ChildrenTracking}
              />
              <Stack.Screen
                name="ReportAbsence"
                component={ReportAbsence}
              />
              <Stack.Screen
                name="RegisterService"
                component={RegisterService}
              />
              <Stack.Screen
                name="ChangeService"
                component={ChangeService}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
        
    }
};


function HomeScreen({ route, navigation }){
    return (
        <View style={styles.fullScreen}>
            <HomeScreenComponent route={route} navigation={navigation}></HomeScreenComponent>
        </View>
    )
};

function MainLogin({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <MainLogInComponent route={route} navigation={navigation}></MainLogInComponent>
        </View>
    )
}

function GetInfoLogin({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <GetInfoLogInComponent route={route} navigation={navigation}></GetInfoLogInComponent>
        </View>
    )
}

function ForgetPassword({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <ForgetPasswordComponent route={route} navigation={navigation}></ForgetPasswordComponent>
        </View>
    )
}

function ChildrenTracking({route, navigation}){
   return (
        <View style={styles.fullScreen}>
            <ChildrenTrackingComponent route={route} navigation={navigation}></ChildrenTrackingComponent>
        </View>
    )
}

function ReportAbsence({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <ReportAbsenceComponent route={route} navigation={navigation}></ReportAbsenceComponent>
        </View>
    )
}

function RegisterService({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <RegisterServiceComponent route={route} navigation={navigation}></RegisterServiceComponent>
        </View>
    )
}

function ChangeService({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <ChangeServiceComponent route={route} navigation={navigation}></ChangeServiceComponent>
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

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default App;
import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const AccountComponent = require("./Main").default;
const store = require("../redux/Redux").default;

const commonStyles = require("../../../../common/style/index").default;

export default class Account extends Component{
    render(){
        return (
            <Provider store={store}>
                <AccountComponent style={commonStyles.fullViewVerticalCenter}/>
            </Provider>
        )
    }
}
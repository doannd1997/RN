import React, {Component} from "react";
import {View, Text} from "react-native";

const commonStyles = require("../../../common/style").default;
const styles = require("../style/styles").default;

export default class HomeScreen extends Component{
    render(){
        return (
            <View styles={commonStyles.fullViewCenterVertical}>
                <Text>Home</Text>
            </View>
        )
    }
}
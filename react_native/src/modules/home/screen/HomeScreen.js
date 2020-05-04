import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const createToolBar = ()=>{
    return (
        <View style={commonStyles.toolBar}>
            <TouchableOpacity style={styles.btnLogin} onPress={()=>{alert("press log in")}}>
                <Text style={[commonStyles.textBold, commonStyles.text]}>
                    {global.localization.getLang("lang_login")}
                </Text>
            </TouchableOpacity>
        </View>
    )
    
}

export default class HomeScreen extends Component{
    render(){
        return (
            <View style={commonStyles.fullViewCenterVertical}>
                {createToolBar()}
                <Text>Home</Text>
            </View>
        )
    }
}
import React, {Component} from "react"
import {View, Text} from "react-native"

export default class MainScreen extends Component{
    render(){
        return (
            <View>
                <Text>
                    {global.localization.getLang("lang_register")} in main screen context
                </Text>
            </View>
        )
    }
}
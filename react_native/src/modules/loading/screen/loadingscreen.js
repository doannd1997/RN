import React, {Component} from "react";
import {View, Image, Text} from "react-native";
const commonStyle = require("../../../common/style").default;
const styles = require("../style/index").default;
const localization = require(".././../../localization/localize").default;

const res = {
    image: require("../../../../res/image/LoadingScreen/bus.png")
}

export default class LoadingScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.busContainer}>
                    <Image source={res.image} style={styles.imgageBus}/>
                </View>
                <Text style={styles.textContainer}>
                    Bus Parent
                </Text>
            </View>
        )
    }
}
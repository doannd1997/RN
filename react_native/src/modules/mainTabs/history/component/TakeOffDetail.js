import React, {Component} from "react";
import {View, Text} from "react-native";

const styles = require("../style/styles").default;

export default TakeOffDetail = (props)=>{
    var isBoarding = props.index%2==0;
    return (
        <View style={[styles.sectionListItem, isBoarding ? styles.itemBoadring : styles.itemGetOff]}>
            <Text style={styles.itemText}>
                {props.name} :  {props.index}
            </Text>
        </View>
    )
}
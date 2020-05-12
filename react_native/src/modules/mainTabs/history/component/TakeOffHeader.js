import React, {Component} from "react";
import {View, Text} from "react-native";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

export default TakeOffHeader = (props)=>{
    return (
        <View style={styles.sectionListHeader}>
            <Text style={[commonStyles.textBold, styles.headerText]}>
                {props.title}
            </Text>
        </View>
    )
}
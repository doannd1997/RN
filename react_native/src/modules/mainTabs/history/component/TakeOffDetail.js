import React, {Component} from "react";
import {View, Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/AntDesign"

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

export default TakeOffDetail = (props)=>{
    switch (props.data.action){
        case "UP":
            var name = "upcircle"
            var color = "green"
            break;
        case "DOWN":
            var name = "downcircle"
            var color = "orange"
            break;
    }
    return (
      <View style={[styles.sectionListItem]}>
        <View style={[styles.itemActionType]}>
          <Icon name={name} color={color} size={30} />
        </View>
        <LinearGradient
          style={[styles.itemTime]}
          colors={['#136a8a', '#267871']}
          start={{x: 0, y: 0.65}}
          end={{x: 1, y: 0}}>
          <Text style={styles.itemTimeText}>{props.data.time}</Text>
        </LinearGradient>
        <View style={styles.itemPlace}><Text>{props.data.place}</Text></View>
      </View>
    );
}
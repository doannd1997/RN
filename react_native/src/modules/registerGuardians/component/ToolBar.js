import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from "react-redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../../color/Colors").default;

const ToolBar = props=>{
    const activeTabStyle = commonStyles.toolBarElementContainerActive;
    const inactiveTabStyle = commonStyles.toolBarElementContainerInactive;
    return (
      <LinearGradient
        style={[commonStyles.toolBar, styles.toolBar]}
        colors={[colors.headerBar, colors.headerBar]}
        // start={[0, 0.65]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <View style={[commonStyles.fullViewVerticalCenter]}>
          <Text style={[commonStyles.toolBarTitle]}>
            {global.localization.getLang('lang_register_guardian')}
          </Text>
        </View>
      </LinearGradient>
    );
}

const mapStateToProps = state => {
    return {
      curTab: state.curTab
    }
  };
  
export default connect(mapStateToProps)(ToolBar);


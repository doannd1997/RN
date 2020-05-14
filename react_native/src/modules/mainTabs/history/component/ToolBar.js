import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient"
import { connect } from "react-redux";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = props=>{
    return (
      <LinearGradient
        style={[commonStyles.toolBar, styles.toolBar]}
        colors={['#136a8a', '#267871']}
        // start={[0, 0.65]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <View style={styles.infoDiv}>
          <Text style={[commonStyles.textBold, commonStyles.text, {fontStyle:"italic"}]}>
            Ghi Nhận Đến 25/10/2019
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnPickDate}
          onPress={() => {
            props.dispatch({type: "TOGGLE_PICKING"})
          }}>
          <Text style={[commonStyles.Text, {color: "#fff"}]}>
            {global.localization.getLang("lang_pick_date")}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
}

const mapStateToProps = state => ({

  });
  
export default connect(mapStateToProps)(ToolBar);


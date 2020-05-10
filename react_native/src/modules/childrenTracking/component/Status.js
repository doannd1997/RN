import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class DefaultInfo extends Component {
  render(){
    return (
      <View style={styles.divInfoInside}>
        <Icon
          name="running"
          size={28}
          color={colors.thickTheme}
        />
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
    }
}

export default connect(mapStateToProps)(DefaultInfo);
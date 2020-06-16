import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class DefaultInfo extends Component {
  render(){
    return (
      <View style={styles.divInfoInside}>
        <Image source={require("../../../../res/image/StudenTracking/location.png")} style={styles.iconOther}/>
      <Text style={[styles.textDivInfoCommon]}>
          {this.props.place}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      place: "Place"
    }
}

export default connect(mapStateToProps)(DefaultInfo);
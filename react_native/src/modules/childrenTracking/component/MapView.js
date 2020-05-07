import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

var MapViewFunc = (props)=>{
  return (
    <MapView
      style={[commonStyles.fullViewVerticalCenter, styles.map]}
      initialRegion={{
        latitude: 21.005042,
        longitude: 105.843597,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {props.CHILDREN_TRACKING_showingDivInfo ? (
        <Marker
          coordinate={{
            latitude: 21.005042,
            longitude: 105.843597,
          }}
          title="Current Location"
        />
      ) : null}
    </MapView>
  );
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        CHILDREN_TRACKING_showingDivInfo: state.CHILDREN_TRACKING_showingDivInfo
    }
}

export default connect(mapStateToProps)(MapViewFunc);
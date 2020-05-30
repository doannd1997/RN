import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class MapViewComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var self = this;
    return (
      <MapView
        showsUserLocation={true}
        mapType={this.props.mapType}
        style={[styles.map]}
        provider={PROVIDER_DEFAULT}
        initialRegion={this.props.region}
        region={this.props.region}
        onRegionChange={region => {
          self.props.dispatch({
            type: 'MAP_VIEW_UPDATE_REGION',
            region: region,
          });
        }}>
        {this.props.placeSelected != null ? (
          <Marker
            coordinate={{
              latitude: this.props.placeSelected.latitude,
              longitude: this.props.placeSelected.longitude,
            }}
            image={require('../../../../res/image/HomeScreen/pin.png')}
          >
            <Callout>
              <Text>
                {this.props.placeSelected.title}
              </Text>
            </Callout>
            </Marker>
        ) : null}
      </MapView>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      placeSelected: state.placeSelected,
      region: state.region,
    }
}

export default connect(mapStateToProps)(MapViewComponent);
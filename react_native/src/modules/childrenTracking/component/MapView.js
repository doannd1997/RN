import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class BusComponent extends Component {
  render(){
    return (
      <Marker
        coordinate={global.userData.getBusCoordinate(this.props.index)}
        title={""+this.props.index}
        description={
            global.localization.getLang('lang_bus_transport')
        }
        image={require('../../../../res/image/HomeScreen/transport.png')}
        anchor={{x: 0.5, y: 0.5}}
      />
    );
  }
}

class MapViewComponent extends Component {
  render() {
    var self = this;
    return (
      <MapView
        showsUserLocation={true}
        mapType={this.props.mapType}
        style={[commonStyles.fullViewVerticalCenter, styles.map]}
        provider={PROVIDER_DEFAULT}
        initialRegion={this.props.region}
        region={this.props.region}
        onRegionChange={(region)=>{
          self.props.dispatch({type: "MAP_VIEW_UPDATE_REGION", region: region})
        }}
      >
        <Marker
          // draggable
          coordinate={{
            latitude: 21.005042,
            longitude: 105.843597,
          }}
          title={global.userData.getChildName()}
          description={
            global.userData.isChildOnBus()
              ? global.localization.getLang('lang_on_bus')
              : global.localization.getLang('lang_out_bus')
          }
          image={require('../../../../res/image/HomeScreen/education.png')}
          anchor={{x: 0.5, y: 0.5}}
        />
        {[0, 1, 2].map((index)=>(<BusComponent {...self.props} index={index}/>))}
      </MapView>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        CHILDREN_TRACKING_showingDivInfo: state.CHILDREN_TRACKING_showingDivInfo,
        region: state.region,
        mapType: state.mapType
    }
}

export default connect(mapStateToProps)(MapViewComponent);
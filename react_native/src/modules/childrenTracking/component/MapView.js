import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

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
          global.userData.isChildOnBus()
            ? global.localization.getLang('lang_on_bus')
            : global.localization.getLang('lang_out_bus')
        }
        image={require('../../../../res/image/HomeScreen/education.png')}
      />
    );
  }
}

class MapViewComponent extends Component {
  render() {
    var self = this;
    return (
      <MapView
        style={[commonStyles.fullViewVerticalCenter, styles.map]}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.props.region}
        region={this.props.region}
        // onRegionChange={(region)=>{
        //   self.props.dispatch({type: "MAP_VIEW_UPDATE_REGION", region: region})
        // }}
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
        region: state.region
    }
}

export default connect(mapStateToProps)(MapViewComponent);
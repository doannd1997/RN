import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout, Circle} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

import { DefaultRegion } from "../redux/Redux";

class BusComponent extends Component {
  render(){
    return (
      <Circle
        center={global.routeData.getBusLocation({
          latitude: this.props.busLocation.latitude, 
          longitude: this.props.busLocation.longitude
        })}
        radius={global.routeData.getBusRadius()}
        fillColor={"rgba(0,120,250,0.5)"}
        strokeWidth={0.2}
      >
      </Circle>
    );
  }
}

class CheckInCom extends Component {
  render(){
    return (
      <Marker
      // draggable
        coordinate={{
          latitude: this.props.data.Lati,
          longitude: this.props.data.Longi,
        }}
        title={global.localization.getLang("lang_check_in")}
        description={
          this.props.data.Name
        }
        anchor={{x: 0.5, y: 1}}>
        <Image
          source={require('../../../../res/image/StudenTracking/checkin_place.png')}
          style={styles.checkinImg}
        />
      </Marker>
    )
  }
}

class MapViewComponent extends Component {
  render() {
    var self = this;
    return (
      <MapView
        showsUserLocation={true}
        mapType={this.props.mapType}
        style={[styles.map]}
        provider={PROVIDER_DEFAULT}
        initialRegion={{...this.props.studentLocation, latitudeDelta: DefaultRegion.latitudeDelta, longitudeDelta: DefaultRegion.longitudeDelta}}
        region={{...this.props.studentLocation, latitudeDelta: DefaultRegion.latitudeDelta, longitudeDelta: DefaultRegion.longitudeDelta}}
        // onRegionChange={region => {
        //   self.props.dispatch({
        //     type: 'MAP_VIEW_UPDATE_REGION',
        //     region: region,
        //   });
        // }}
        >
        <Marker
          // draggable
          coordinate={{
            latitude: this.props.studentLocation.latitude,
            longitude: this.props.studentLocation.longitude,
          }}
          title={global.localization.getLang("lang_place_pick_delivery")}
          description={
            this.props.studentLocation.name
          }
          anchor={{x: 0.5, y: 1}}>
          <Image
            source={require('../../../../res/image/StudenTracking/location.png')}
            style={styles.markerImage}
          />
        </Marker>
        <BusComponent {...self.props} data={this.props.busLocation} />
        {this.props.checkins.map(item=>{
          return <CheckInCom {...this.props} data={item} />
        })}
      </MapView>
    );
  }
}

const mapStateToProps = (state)=>{
  var route = state.studentList[state.curStudent].routes[state.routeType]
  var studentPoint = route.point;
    return {
        region: state.region,
        mapType: state.mapType,
        curStudent: state.curStudent,
        studentList: state.studentList,
        routeType: state.routeType,
        studentLocation: {
          latitude: studentPoint.Lati,
          longitude: studentPoint.Longi,
          name: studentPoint.Name
        },
        busLocation: {
          latitude: route.latitude,
          longitude: route.longitude
        },
        checkins: route.checkins
    }
}

export default connect(mapStateToProps)(MapViewComponent);
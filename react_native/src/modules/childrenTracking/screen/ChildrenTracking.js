import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

const MapViewCom = require("../component/MapView").default;

class ChildrenTrackingCom extends Component{
    render(){
        var self = this;
        return (
          <View style={commonStyles.fullViewVerticalCenter}>
            <MapViewCom/>
            {this.props.CHILDREN_TRACKING_showingDivInfo ? (
              <View style={styles.divInfo}>
                <View
                  style={[
                    commonStyles.fullViewVerticalCenter,
                    styles.panelInfo,
                  ]}
                />
                <View
                  style={[
                    commonStyles.fullViewVerticalTopDown,
                    styles.viewInfo,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      self.props.navigation.navigate('HomeScreen');
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnExpandDivInfo}
                  onPress={() => {
                    self.props.dispatch({
                      type: 'CHILDREN_TRACKING_showingDivInfo__HIDE',
                    });
                  }}>
                  <Icon
                    name="angle-double-down"
                    size={30}
                    color={'#ffffff'}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            {this.props.CHILDREN_TRACKING_showingDivInfo ? null : (
              <View style={styles.divExpand}>
                <TouchableOpacity
                  style={styles.btnExpand}
                  onPress={() => {
                    self.props.dispatch({
                      type: 'CHILDREN_TRACKING_showingDivInfo__SHOW',
                    });
                    self.props.dispatch({
                      type: 'MAP_VIEW_RESET_REGION',
                    });
                  }}>
                  <Icon
                    name="angle-double-up"
                    size={30}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        CHILDREN_TRACKING_showingDivInfo: state.CHILDREN_TRACKING_showingDivInfo
    }
}

export default connect(mapStateToProps)(ChildrenTrackingCom)
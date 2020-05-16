import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

//Tool Bar
const ToolBar = require("../component/ToolBar").default;
// Bản đồ 
const MapViewCom = require("../component/MapView").default;
// Component chứa thông tin cơ bản của học sinh
const DefaultInfoCom = require("../component/DefaultInfo").default;
// Component chứa trạng thái học sinh đã lên xe hay chưa
const StatusCom = require("../component/Status").default;
// Component chứa địa điểm xuất đón trả
const PlaceCom = require("../component/Place").default;

class ChildrenTrackingCom extends Component{
    render(){
        var self = this;
        return (
          <View style={[
            commonStyles.fullViewVerticalCenter,
            commonStyles.screenWithToolBar,
          ]}>
            <ToolBar style={commonStyles.toolBar} />
            <MapViewCom />
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
                  <DefaultInfoCom />
                  <StatusCom />
                  <PlaceCom />
                </View>
                <View style={styles.topRightClusterButton}>
                  <TouchableOpacity
                    style={[
                      styles.btnExpandDivInfo,
                      {backgroundColor: 'red'},
                    ]}
                    onPress={() => {
                      self.props.dispatch({
                        type: 'CHILDREN_TRACKING_showingDivInfo__HIDE',
                      });
                    }}>
                    <Icon name="remove" size={24} color={'#ffffff'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.btnExpandDivInfo, {width: 80}]}
                    onPress={() => {
                      self.props.dispatch({
                        type: 'SWITCH_MAP_TYPE',
                      });
                      self.props.dispatch({
                        type: 'MAP_VIEW_RESET_REGION',
                      });
                    }}>
                    <Text
                      style={[commonStyles.text, styles.txtMapType]}>
                      {global.localization.getLang(
                        'lang_map_type_' + this.props.mapType,
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
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
                  <Icon name="arrow-up" size={30} color={'#ffffff'} />
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
        CHILDREN_TRACKING_showingDivInfo: state.CHILDREN_TRACKING_showingDivInfo,
        mapType: state.mapType
    }
}

export default connect(mapStateToProps)(ChildrenTrackingCom)
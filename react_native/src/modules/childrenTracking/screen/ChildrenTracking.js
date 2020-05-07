import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class ChildrenTrackingCom extends Component{
    render(){
        var self = this;
        return (
          <View style={commonStyles.fullViewVerticalCenter}>
            <MapView
              style={[commonStyles.fullViewVerticalCenter, styles.map]}
              initialRegion={{
                latitude: 21.005042,
                longitude: 105.843597,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
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
                  }}>
                  <Icon
                    name="angle-double-up"
                    size={30}
                    color={colors.commonButton}
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
import React, {Component} from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import MapView from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

class ChildrenTrackingCom extends Component{
    render(){
        var self = this;
        return (
          <View style={commonStyles.fullViewVerticalCenter}>
            <MapView
              style={commonStyles.fullViewVerticalCenter}
              initialRegion={{
                latitude: 21.005042,
                longitude: 105.843597,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <View style={styles.divInfo}>
              <View style={[commonStyles.fullViewVerticalCenter, styles.panelInfo]}/>
              <View style={[commonStyles.fullViewVerticalTopDown, styles.viewInfo]}>
                  <TouchableOpacity
                    onPress={()=>{
                        self.props.navigation.navigate("HomeScreen")
                    }}
                  >
                      <Text>
                          Back To Home
                      </Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(ChildrenTrackingCom)
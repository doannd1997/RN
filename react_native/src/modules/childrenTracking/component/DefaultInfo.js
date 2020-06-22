import React, {Component, useState} from "react";
import {View, Text, useS, Image} from "react-native";

import ModalSelector from "react-native-modal-selector";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Callout} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class DefaultInfo extends Component {
  render(){
    return (
      <View style={styles.divInfoInside}>
        <Image
          style={[styles.avatar]}
          source={require('../../../../res/image/HomeScreen/education.png')}
        />
        <View style={styles.childNameContainer}>
          <ModalSelector
            style={{width: "100%", height: "100%"}}
            selectStyle={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}
            initValueTextStyle={styles.childNameTxt}
            cancelText={global.localization.getLang("lang_cancel")}
            data={this.props.childList.map((item, index)=>{
              return {
                key: index,
                label: item.displayName
              }
            })}
            initValue={this.props.childList[this.props.curChild].displayName}
            onChange={(option)=>{
              this.props.dispatch({type: 'CHANGE_STUDENT', index: option.key})
            }} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      name: "Student",
      curChild: state.curChild,
      childList: state.childList
    }
}

export default connect(mapStateToProps)(DefaultInfo);
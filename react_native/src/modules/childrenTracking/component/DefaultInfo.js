import React, {Component, useState} from "react";
import {View, Text, useS, Image, Picker} from "react-native";
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
          <Picker
            style={{width: '100%', height: '100%'}}
            mode={'dialog'}
            // itemStyle={styles.childNameTxt}
            // itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                
            selectedValue={this.props.curChild}
            onValueChange={(value, index) => {
              this.props.dispatch({type: 'CHANGE_STUDENT', index: index});
            }}>
            {this.props.childList.map((item, index) => {
              return <Picker.Item label={item.displayName} value={index} />;
            })}
          </Picker>
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
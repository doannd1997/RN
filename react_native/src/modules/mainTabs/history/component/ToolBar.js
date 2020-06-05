import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
import {QuickToast} from "../../../../utils/Toast";

import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker'

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../../color/Colors").default;

const ToolBar = props=>{
    return (
      <LinearGradient
        style={[commonStyles.toolBar, styles.toolBar]}
        colors={[colors.headerBar, colors.headerBar]}
        // start={[0, 0.65]}
        start={{x: 0, y: 0.65}}
        end={{x: 1, y: 0}}>
        <View style={styles.infoDiv}>
          <Text style={[commonStyles.textBold, commonStyles.text, {fontStyle:"italic"}]}>
            Ghi Nhận Đến 25/10/2019
          </Text>
        </View>
        <View
          style={styles.btnPickDate}
          >
          <Icon name="calendar" size={22} color={"#fff"}/>
          <Text style={[commonStyles.Text, {color: "#fff"}]}>
            {global.localization.getLang("lang_select")}
          </Text>
          <DatePicker
                  showIcon={false}
                  hideText={true}
                  style={{width: 10}}
                  date={"05-06-2020"}
                  mode="date"
                  // placeholder="select date"
                  format="DD-MM-YYYY"
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  style={{width: "100%", height: "100%", alignSelf: "center", position: "absolute"}} 
                  onDateChange={(date) => {QuickToast.show(date)}}
                />
        </View>
      </LinearGradient>
    );
}

const mapStateToProps = state => ({

  });
  
export default connect(mapStateToProps)(ToolBar);


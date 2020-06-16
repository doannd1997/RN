import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert, TouchableOpacity} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute, useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import EStyleSheet from "react-native-extended-stylesheet";

import { connect } from "react-redux";
import styles from "../../modules/changeService/style/styles";

const commonStyles = require("../style/index").default;
const colors = require("../../color/Colors").default;

const NotLogInCom = props=>{
    var navagation = useNavigation();
    return (
      <View style={commonStyles.fullViewVerticalCenter}>
        <Text style={styles.txtNotLogin}>
            {global.localization.getLang("lang_noti_login")}
        </Text>
        <View>
            <TouchableOpacity>
                <Text>
                    
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
    return {}
  };
  
export default connect(mapStateToProps)(NotLogInCom);


const styles = EStyleSheet.create({

})


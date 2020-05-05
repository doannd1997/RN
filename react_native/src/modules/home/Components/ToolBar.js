import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = props=>{
    return (
      <View style={commonStyles.toolBar}>
        {!props.logedIn ? (
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              props.dispatch({type: 'LOG_IN'});
            }}>
            <Text style={[commonStyles.textBold, commonStyles.text]}>
              {global.localization.getLang('lang_login')}
            </Text>
          </TouchableOpacity>
        ) : null}
        {props.logedIn ? (
          <View style={styles.toolBarUser}>
            <Image
              source={require('../../../../res/image/HomeScreen/aquatic.png')}
              style={styles.avatar}
            />
            <Text style={commonStyles.text}>Xin Chào, Developer!</Text>
          </View>
        ) : null}
      </View>
    );
}

const mapStateToProps = state => ({
    logedIn: state.logedIn
  });
  
  export default connect(mapStateToProps)(ToolBar);


import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

class MainLogInCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var self = this;
        return (
          <View style={commonStyles.fullViewVerticalCenter}>
            <Fumi
              style={styles.input}
              label={global.localization.getLang('lang_phone_number')}
              iconClass={FontAwesomeIcon}
              iconName={'user-circle'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
            />
            <Fumi
              style={styles.input}
              secureTextEntry={true}
              label={global.localization.getLang('lang_password')}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
            />
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                self.props.dispatch({type: 'TOGGLE_LOG_IN'});
                self.props.navigation.navigate('HomeScreen', {
                  // logedIn: false,
                });
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_login')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                // self.props.dispatch({type: 'TOGGLE_LOG_IN'});
                // self.props.navigation.navigate('HomeScreen', {
                //   logedIn: false,
                // });
                self.props.navigation.navigate("FogetPassword")
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_change_password')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                self.props.navigation.navigate('GetInfoLogin', {
                  
                });
              }}>
              <Text
                style={[
                  commonStyles.text,
                  commonStyles.textBold,
                  styles.text,
                ]}>
                {global.localization.getLang('lang_forget_password')}
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(MainLogInCom)
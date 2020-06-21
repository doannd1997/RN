import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ToolBar = require("../component/ToolBar").default;
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

export default class MainLogInCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var self = this;
        return (
          <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
            <ToolBar style={commonStyles.toolBar} />
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
                self.props.navigation.navigate('HomeScreen', {
                  logedIn: true,
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
          </View>
        );
    }
}
import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import {withNavigation} from "react-navigation"

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const {StoreDefine} = require("../redux/Redux");
const ToolBar = require("../component/ToolBar").default;
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const Validator = require("../../../utils/Validator").default;

const Networking = require("../networking/Networking").default;

class MainLogInCom extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
      // var param = this.props.route.params;
      // var phoneNumber = param != undefined ? param.phoneNumber : "";
      // var password = param != undefined ? param.password : "";
      // this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: phoneNumber});
      // this.props.dispatch({type: StoreDefine.TYPE_PASSWORD, password: password});
      this.props.dispatch({type: StoreDefine.TYPE_PHONE_NUMBER, phoneNumber: global.authenData.getPhoneNumber()});
      this.props.dispatch({type: StoreDefine.TYPE_PASSWORD, password: global.authenData.getPassword()});
    }
    componentWillUnmount(){

    }
    componentDidCatch(){
      
    }
    componentDidUpdate(){
      
    }
    render(){
        var self = this;
        return (
          <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
            <ToolBar style={commonStyles.toolBar} />
            <View style={[commonStyles.fullViewVerticalCenter, commonStyles.defaultColorBg]}>
            <Fumi
              style={styles.input}
              label={global.localization.getLang('lang_phone_number')}
              iconClass={FontAwesomeIcon}
              iconName={'user-circle'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              keyboardType='numeric'
              value={this.props.phoneNumber}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_PHONE_NUMBER,
                  phoneNumber: text
                })
              }}
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
              value={this.props.password}
              onChangeText={(text)=>{
                this.props.dispatch({
                  type: StoreDefine.TYPE_PASSWORD,
                  password: text
                })
              }}
            />
            <TouchableOpacity
              style={[styles.input, styles.button]}
              onPress={() => {
                var params = [this.props.phoneNumber, this.props.password];
                Validator.validateLength(params, ()=>{
                  Networking.apiLogIn(this.props);
                })
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

const mapStateToProps = (state)=>{
  return {
    phoneNumber: state.phoneNumber,
    password: state.password
  }
}

export default withNavigation(connect(mapStateToProps)(MainLogInCom));
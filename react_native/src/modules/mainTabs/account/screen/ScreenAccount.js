import React, {Component} from "react";
import {View, Text, StyleSheet, BackHandler} from "react-native"
import {connect, Provider} from "react-redux"
import NotLogInCom from "../../../../common/component/NotLogInCom";
import styles from "../style/styles";

const AccountComponent = require("./Main").default;
const store = require("../redux/Redux").default;

const commonStyles = require("../../../../common/style/index").default;

class Account extends Component{
    render(){
        return (
          <View style={[commonStyles.fullViewVerticalCenter, {backgroundColor: "cyan"}]}>
            {this.props.logedIn ? (
              <AccountComponent
                style={commonStyles.fullViewVerticalCenter}
              />
            ) : (
              <NotLogInCom style={[commonStyles.fullViewVerticalCenter, {backgroundColor: "red"}]}/>
            )}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        curTab: state.curTab,
        parentAvatar: state.parentAvatar,
        parentName: state.parentName
    }
}

export default connect(mapStateToProps)(Account);


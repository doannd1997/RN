import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const store = require("../redux/Redux").default;
const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;
const MailListCom = require("../component/MailList").default;
const ButtonCreate = require("../component/BtnCreate").default;
const PopupComposeCom = require("../component/PopUpConmpose").default;
const MailDetailCom = require("../component/MailDetail").default;

class Main extends Component{
    render(){
        return (
          <View style={styles.container}>
            <ToolBar {...this.props}/>
            <View style={styles.content}>
              <MailListCom/>
              <ButtonCreate/>
              <MailDetailCom/>
              <PopupComposeCom/>
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab,
        isDisplayPopup: state.isDisplayPopup
    }
}

export default connect(mapStateToProps)(Main);

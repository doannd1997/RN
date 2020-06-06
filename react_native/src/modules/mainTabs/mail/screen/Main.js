import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const store = require("../redux/Redux").default;
const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;
const MailListCom = require("../component/MailList").default;
const ButtonCreate = require("../component/BtnCreate").default;

class Main extends Component{
    render(){
        return (
          <View style={styles.container}>
            <ToolBar {...this.props}/>
            <View style={styles.content}>
              <MailListCom/>
              <ButtonCreate/>
            </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab
    }
}

export default connect(mapStateToProps)(Main);

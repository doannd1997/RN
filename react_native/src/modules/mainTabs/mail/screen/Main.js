import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const store = require("../redux/Redux").default;

const Item = require("../component/TakeOffDetail").default;
const Header = require("../component/TakeOffHeader").default;

const ToolBar = require("../component/ToolBar").default;

class Main extends Component{
    render(){
        return (
          <View style={styles.container}>
            <ToolBar {...this.props}/>
            <View style={styles.content}></View>
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


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    content: {
      flex: 1,
      width: "100%"
    }
})
import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';

import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;

class ReportAbsenceCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var self = this;
        return (
          <View style={[commonStyles.fullViewVerticalCenter, commonStyles.screenWithToolBar]}>
              <ToolBar style={commonStyles.toolBar}/>
              <View style={commonStyles.divForm}>

              </View>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(ReportAbsenceCom)
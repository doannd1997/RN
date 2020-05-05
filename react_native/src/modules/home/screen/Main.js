import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../Components/ToolBar").default;
const Gridder = require("../Components/Gridder").default;

class HomeScreenCom extends Component{
    
    render(){
        return (
            <View style={commonStyles.fullViewVerticalTopDown}>
                <ToolBar/>
                <Gridder/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(HomeScreenCom)
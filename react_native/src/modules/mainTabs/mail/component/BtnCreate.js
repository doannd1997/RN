import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {redux, connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const TimeUtils = require("../../../../utils/Times").default;

class ButtonCreate extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.btnCreate}>
                <Icon name={"add"} size={40} color={"#fff"}/>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect(mapStateToProps)(ButtonCreate);
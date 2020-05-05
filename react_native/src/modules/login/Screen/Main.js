import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;


class MainLogInCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var self = this;
        return (
          <View style={commonStyles.fullViewVerticalBottomUp}>
            <TouchableOpacity
              onPress={() => {
                // self.props.nav.navigate('HomeScreen');
                self.props.dispatch({type: "TOGGLE_LOG_IN"})
              }}>
              <Text>
                {this.props.logedIn ? 'Log In' : 'Log Out'}Press Me
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
import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {redux, connect} from "react-redux";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const TimeUtils = require("../../../../utils/Times").default;

class Mail extends Component{
    render(){
        console.log(this.props.data.item)
        return (
          <View style={[styles.mailContainer]}>
            <TouchableOpacity style={commonStyles.fullBtn}
                disabled
            >
              <View style={[styles.btnMail]}>
                <View style={styles.mailHeaderContainer}>
                    <Text style={styles.mailLblHeader}>
                        {this.props.data.item.header}
                    </Text>
                </View>
                <View style={styles.mailContentContainer}>
                    <Text style={styles.mailLblContent}>
                        {this.props.data.item.content}
                    </Text>
                </View>
                <View style={styles.mailTimeContainer}>
                    <Text style={styles.mailLblTime}>
                        {TimeUtils.formatTime(this.props.data.item.time)}
                    </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect(mapStateToProps)(Mail);
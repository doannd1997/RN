import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {redux, connect} from "react-redux";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
import LinearGradient from "react-native-linear-gradient";

const TimeUtils = require("../../../../utils/Times").default;

class Mail extends Component{
    render(){
        return (
          <View style={[styles.mailContainer]}>
            <TouchableOpacity style={commonStyles.fullBtn} disabled>
              <View
                style={[styles.btnMail]}
                >
                <TouchableOpacity 
                    style={styles.btnOneMail}
                    onPress={()=>{
                        this.props.dispatch({type: "MAIL_SHOW_MAIL", mail_mailIndex: this.props.data.index});
                    }}
                    >
                  <View style={styles.mailHeaderContainer}>
                    <Text
                      style={[styles.mailLblHeader, this.props.data.item.isNew ? styles.mailLblHeaderNew : styles.mailLblHeaderNormal]}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {this.props.data.item.header}
                    </Text>
                  </View>
                  <View style={styles.mailContentContainer}>
                    <Text
                      style={styles.mailLblContent}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {this.props.data.item.content}
                    </Text>
                  </View>
                  <View style={styles.mailTimeContainer}>
                    <Text
                      style={styles.mailLblTime}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}>
                      {TimeUtils.formatTime(this.props.data.item.time)}
                    </Text>
                  </View>
                </TouchableOpacity>
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
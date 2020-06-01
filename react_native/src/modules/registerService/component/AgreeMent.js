import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const commonStyles = require("../../../common/style").default;

class Agreement extends Component{
    render(){
        var self = this;
        return (
          <View
            style={[
              commonStyles.fullViewVerticalTopDown,
              styles.container,
            ]}>
            <View style={styles.contentContainer}>
              <Text>[Điều Khoản]</Text>
            </View>
            <View style={styles.bottomBtn}>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity
                  style={commonStyles.formBtnCancel}
                  onPress={()=>{
                    self.props.dispatch({type: "REJECT_AND_HIDE_AGREEMENT"})
                  }}>
                  <Text style={commonStyles.formBtnOkText}>
                    {global.localization.getLang('lang_reject')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleBtnContainer}>
                <TouchableOpacity
                  style={commonStyles.formBtnConfirm}
                  onPress={() => {
                    self.props.dispatch({type: "ACCEPT_AND_HIDE_AGREEMENT"})
                  }}>
                  <Text style={commonStyles.formBtnOkText}>
                    {global.localization.getLang('lang_accept')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        // showAgreement: state.showAgreement
    }
}

export default connect(mapStateToProps)(Agreement);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    contentContainer: {
        flex: 11,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBtn: {
        flex: 1,
        backgroundColor: "cyan",
        width: "100%",
        flexDirection: "row"
    },
    singleBtnContainer: {
        height: "100%",
        flex: 1,
    }
})
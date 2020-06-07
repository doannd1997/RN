import React, {Component} from "react";
import {View, Text, TouchableOpacity, Modal} from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
const colors = require("../../../../color/Colors").default;

const TimeUtils = require("../../../../utils/Times").default;

class PopUpConmpose extends Component {
    render(){
        var self = this;
        return (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            visible={this.props.isDisplayPopup}
            style={styles.modal}>
            <View style={styles.modalContentContainer}>
              <View style={commonStyles.panel} />
              <View style={[styles.divForm]}>
                <View style={styles.formComposeHeader} />
                <View style={styles.formComposeContent} />
                <View style={styles.formComposeFooter}>
                  <LinearGradient
                    style={[styles.btnSend]}
                    colors={[colors.btnComposeLeft, colors.btnComposeRight]}
                    // start={[0, 0.65]}
                    start={{x: 0, y: 0.65}}
                    end={{x: 1, y: 0}}
                  >
                    <TouchableOpacity style={styles.btnSend} onPress={()=>{
                        self.props.dispatch({type: "TOGGLE_COMPOSING"})
                    }}>
                        <Text style={styles.btnSendLbl}>
                            {globalThis.localization.getLang("lang_send_mail")}
                        </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isDisplayPopup: state.isDisplayPopup
    }
};

export default connect(mapStateToProps)(PopUpConmpose);
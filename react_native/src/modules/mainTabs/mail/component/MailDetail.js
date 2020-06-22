import React, {Component} from "react";
import {View, Text, TouchableOpacity, Modal, TextInput, Image, Alert } from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import style from "../../../../common/style";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;
const colors = require("../../../../color/Colors").default;

const TimeUtils = require("../../../../utils/Times").default;

class MailDetail extends Component {
    render(){
        var self = this;
        return (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            visible={this.props.showingMail}
            style={styles.modal}>
            <View style={styles.modalContentContainer}>
                <View style={styles.mailDetailContainer} >
                    <Text style={styles.txtMailDetail}>
                        {this.props.mailIndex == null ? null : this.props.curTab == 0 ? this.props.inbox[this.props.mailIndex].content : this.props.sentMail[this.props.mailIndex].content}
                    </Text>
                </View>
              <View style={styles.bottomButtonMailContentContainer}>
                <View style={commonStyles.singleBtnContainer}>
                  <TouchableOpacity style={commonStyles.formBtnRemove}
                    onPress={()=>{

                        var header = global.localization.getLang("lang_alert_header");
                        var content = global.localization.getLang("lang_confirm_delete_mail");
                        var okLabel = global.localization.getLang(
                        'lang_confirm_ok',
                        );
                        var cancelLabel = global.localization.getLang(
                        'lang_confirm_cancel',
                        );
                        Alert.alert(
                        header,
                        content,
                        [
                            {
                            text: okLabel,
                            onPress: () => {
                                this.props.dispatch({
                                    type: "DELETE_MAIL"
                                })
                            },
                            },
                            {
                            text: cancelLabel,
                            onPress: () => {
                                QuickToast.show("Canceled");
                            },
                            },
                        ],
                        {cancelable: true},
                        );
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.text,
                        commonStyles.textBold,
                        styles.txtBtn,
                      ]}
                    >
                        {global.localization.getLang("lang_delete")}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={commonStyles.singleBtnContainer}>
                  <TouchableOpacity style={commonStyles.formBtnConfirm}
                    onPress={()=>{
                        this.props.dispatch({
                            type: "ClOSE_MAIL"
                        })
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.text,
                        commonStyles.textBold,
                        styles.txtBtn,
                      ]}
                    >
                        {global.localization.getLang("lang_close")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        showingMail: state.showingMail,
        curTab: state.curTab,
        mailIndex: state.mailIndex,
        inbox: state.inbox,
        sentMail: state.sentMail,
    }
};

export default connect(mapStateToProps)(MailDetail);
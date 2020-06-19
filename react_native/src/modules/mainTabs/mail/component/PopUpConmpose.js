import React, {Component} from "react";
import {View, Text, TouchableOpacity, Modal, TextInput, Image } from "react-native";
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
                <LinearGradient
                  style={[styles.formComposeHeader]}
                  colors={[
                    colors.btnComposeLeft,
                    colors.btnComposeRight,
                  ]}
                  // start={[0, 0.65]}
                  start={{x: 0, y: 0.65}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.formComposeLblHeader}>
                    {global.localization.getLang(
                      'lang_mail_compose_header',
                    )}
                  </Text>
                  <TouchableOpacity
                    style={styles.headerBtnClose}
                    onPress={() => {
                      self.props.dispatch({type: 'CLOSE_COMPOSE_MAIL'});
                    }}>
                    <Image
                      source={require('../../../../../res/image/popup/close.png')}
                      style={styles.imgClose}
                      resizeMethod={'scale'}
                    />
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.formComposeContent}>
                  <TextInput
                    style={styles.txtMailContent}
                    multiline={true}
                    placeholder={'...'}
                    value={this.props.composeMailContent}
                    onChangeText={(text)=>{
                      this.props.dispatch({
                        type: "TYPE_COMPOSE_MAIL",
                        composeMailContent: text
                      })
                    }}
                  />
                </View>
                <View style={styles.formComposeFooter}>
                  <View
                    style={[styles.btnSend]}
                    >
                    <TouchableOpacity
                      style={styles.btnSend}
                      onPress={() => {
                        var mail = {
                          header: "New Mail",
                          content: this.props.composeMailContent,
                          time: new Date().getTime()
                        }
                        self.props.dispatch({
                          type: 'SEND_MAIL',
                          mail: mail
                        });
                      }}>
                      <Image
                        style={styles.imgSendMail}
                        source={require('../../../../../res/image/popup/send.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isDisplayPopup: state.isDisplayPopup,
        composeMailContent: state.composeMailContent
    }
};

export default connect(mapStateToProps)(PopUpConmpose);
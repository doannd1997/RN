import React, {Component} from "react";
import {View, Text, Modal, TextInput, Image, TouchableOpacity, Platform, Alert} from "react-native";
import {redux, connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from 'react-native-image-picker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;

const TimeUtils = require("../../../utils/Times").default;
import {QuickToast} from "../../../utils/Toast";

const defaultAvatar =  require("../../../../res/image/guardians/police.png");

class PopUpUpdate extends Component {
    constructor(props){
      super(props);
      this.options = {
        title: global.localization.getLang("lang_select_image"),
        // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    }
    render(){
        var self = this;
        return (
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            visible={this.props.editting}
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
                  <Text
                    style={[
                      commonStyles.text,
                      commonStyles.textBold,
                      styles.formLblHeader,
                    ]}>
                    {global.localization.getLang('lang_edit_guardian')}
                  </Text>
                  <TouchableOpacity
                    style={styles.headerBtnClose}
                    onPress={() => {
                      self.props.dispatch({type: 'CLOSE_POP_UP_EDIT'});
                    }}>
                    <Image
                      source={require('../../../../res/image/popup/close.png')}
                      style={styles.imgClose}
                      resizeMethod={'scale'}
                    />
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.formComposeContent}>
                  <View style={styles.formDivContentAvatar}>
                    <TouchableOpacity
                      sytyle={styles.avatarContainer}
                      onPress={() => {
                        ImagePicker.showImagePicker(
                          this.options,
                          response => {
                            if (response.didCancel) {
                              console.log(
                                'User cancelled image picker',
                              );
                            } else if (response.error) {
                              console.log(
                                'ImagePicker Error: ',
                                response.error,
                              );
                            } else if (response.customButton) {
                              console.log(
                                'User tapped custom button: ',
                                response.customButton,
                              );
                            } else {
                              var source;

                              if (Platform.OS === 'android') {
                                source = {
                                  uri: response.uri,
                                  isStatic: true,
                                };
                              } else {
                                source = {
                                  uri: response.uri.replace(
                                    'file://',
                                    '',
                                  ),
                                  isStatic: true,
                                };
                              }

                              // const source = { uri: response.uri };

                              // You can also display the image using data:
                              // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                              this.props.dispatch({
                                type: 'SET_EDIT_AVATAR',
                                editAvatarSource: source,
                              });
                            }
                          },
                        );
                      }}>
                      <Image
                        defaultSource={require('../../../../res/image/guardians/police.png')}
                        source={this.props.editAvatarSource}
                        style={styles.avatar}
                        resizeMethod={'resize'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.formDivContentInfo}>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {global.localization.getLang(
                            'lang_full_name',
                          )}
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                          defaultValue={(this.props.curGuardian ? this.props.curGuardian.item.name : "")}
                          onChangeText={(text)=>{
                            this.props.dispatch({
                              type: 'UPDATE_PSEUDO',
                              pseudoGuardian: {
                                ...this.props.pseudoGuardian,
                                item: {
                                  ...this.props.pseudoGuardian.item,
                                  name: text
                                },
                              },
                            });
                          }}
                        />
                      </View>
                    </View>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {/* {global.localization.getLang(
                            'lang_full_name',
                          )} */}
                          [Any Thing]
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                        />
                      </View>
                    </View>
                    <View style={styles.formAddTxt0}>
                      <View style={styles.inputLbl}>
                        <Text style={styles.txtLblHeader}>
                          {/* {global.localization.getLang(
                            'lang_full_name',
                          )} */}
                          [Any Thing]
                        </Text>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[
                            commonStyles.txtInput,
                            styles.formTxt,
                          ]}
                          placeholder={'...'}
                        />
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.formDivContentOther} /> */}
                </View>
                <View style={styles.formEditFooter}>
                    <View style={{height: "100%", flex: 1}}>
                      <TouchableOpacity
                        style={[commonStyles.formBtnRemove, styles.btnRemove]}
                        onPress={()=>{
                          var header = global.localization.getLang(
                            'lang_noti_header',
                          );
                          var content = global.localization
                            .getLang(
                              'lang_confirm_delete_guardian'
                            )
                            .replace('@guardian@', self.props.curGuardian.item.name);
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
                                  this.props.dispatch({type: "DELETE_GUARDIAN", index: this.props.curGuardian.index})
                                },
                              },
                              {
                                text: cancelLabel,
                                onPress: () => {
                                  // 
                                },
                              },
                            ],
                            {cancelable: true},
                          );
                        }}
                      >
                        <Text style={[commonStyles.textBold, commonStyles.text, styles.txtFooter]}>
                          {global.localization.getLang("lang_delete")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{height: "100%", flex: 1}}>
                      <TouchableOpacity
                        style={[commonStyles.formBtnConfirm, styles.btnUpdate]}
                        onPress={()=>{
                          var header = global.localization.getLang(
                            'lang_noti_header',
                          );
                          var content = global.localization
                            .getLang(
                              'lang_confirm_update_guardian'
                            )
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
                                  var guardian = this.props.pseudoGuardian.item;
                                  this.props.dispatch({type: "UPDATE_GUARDIAN", guardian: guardian, index: this.props.curGuardian.index});
                                },
                              },
                              {
                                text: cancelLabel,
                                onPress: () => {
                                  // 
                                },
                              },
                            ],
                            {cancelable: true},
                          );    
                        }}
                      >
                          <Text style={[commonStyles.textBold, commonStyles.text, styles.txtFooter]}>
                          {global.localization.getLang("lang_update")}
                          </Text>
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
      editting: state.editting,
      editAvatarSource: state.editAvatarSource,
      curGuardian: state.curGuardian,
      pseudoGuardian: state.pseudoGuardian
    }
};

export default connect(mapStateToProps)(PopUpUpdate);


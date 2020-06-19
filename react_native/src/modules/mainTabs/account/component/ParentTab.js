import React, {Component} from "react";
import {View, Text, Alert, Image, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';

import {QuickToast} from "../../../../utils/Toast";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

var opstions;

class ParentTab extends Component{
    constructor(){
      super();
      options = {
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
          <View style={[styles.container]}>
            <View style={styles.coverContainer}>
              <Image
                style={styles.parentCover}
                source={require('../../../../../res/image/Account/beach.jpg')}
                resizeMethod="resize"
              />
            </View>
            <View style={styles.parentInfoContainer}>
              <View style={styles.parentAvatarContainer}>
                <TouchableOpacity
                  onPress={() => {
                    ImagePicker.showImagePicker(options, response => {
                      if (response.didCancel) {
                        console.log('User cancelled image picker');
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
                            uri: response.uri.replace('file://', ''),
                            isStatic: true,
                          };
                        }

                        this.props.dispatch({
                          type: 'SET_PARENT_AVATAR',
                          avatar: source,
                        });
                      }
                    });
                  }}>
                  <Image
                    style={styles.parentAvatar}
                    source={this.props.parentAvatar}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.otherInfoContainer}>
                <View style={styles.parentNameContainer}>
                  <Text style={styles.parentName}>
                    {this.props.parentName}
                  </Text>
                </View>
                <View style={styles.btnLogOutContainer}>
                  <TouchableOpacity style={commonStyles.fullBtn}
                    onPress={()=>{
                      var header = global.localization.getLang("lang_noti_header");
                      var content = global.localization.getLang("lang_confirm_log_out");
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
                          // {
                          //   // text: global.localization.getLang(langItem),
                          //   // onPress: () => console.log('May be Pressed'),
                          // },
                          {
                            text: okLabel,
                            onPress: () => {
                              self.props.dispatch({type: "LOG_OUT"})
                            },
                          },
                          {
                            text: cancelLabel,
                            onPress: () => {
                              self.props.dispatch({type: "LOG_OUT"})
                            },
                          },
                        ],
                        {cancelable: true},
                      );
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.textBold,
                        commonStyles.text,
                        styles.txtLogOut,
                      ]}>
                      {global.localization.getLang('lang_log_out')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
    }
};

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab,
        parentAvatar: state.parentAvatar,
        parentName: state.parentName
    }
}

export default connect(mapStateToProps)(ParentTab);
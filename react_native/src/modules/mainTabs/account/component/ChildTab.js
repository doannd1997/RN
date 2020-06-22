import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';
import ModalSelector from "react-native-modal-selector";
import { FlatList } from "react-native-gesture-handler";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const GuardianCom = require("../component/Guardian").default;

const options = {
    title: global.localization.getLang("lang_select_image"),
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

class ParentTab extends Component{
    render(){
        return (
          <View style={[styles.container]}>
            <View style={styles.coverContainer}>
              <Image
                style={styles.parentCover}
                source={require('../../../../../res/image/Account/school.jpg')}
                resizeMethod="resize"
              />
            </View>
            <View style={styles.parentInfoContainer}>
              <View style={styles.parentAvatarContainer}>
                <TouchableOpacity
                  onPress={() => {
                    ImagePicker.showImagePicker(options, response => {
                      if (response.didCancel) {
                      } else if (response.error) {
                      } else if (response.customButton) {
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
                          type: 'SET_STUDENT_AVATAR',
                          avatar: source,
                        });
                      }
                    });
                  }}>
                  <Image
                    style={styles.parentAvatar}
                    source={
                      this.props.childList[this.props.curChild].avatar
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.otherInfoContainer}>
                <ModalSelector
                  style={styles.parentNameContainer}
                  selectStyle={styles.childNameContent}
                  initValueTextStyle={styles.childName}
                  cancelText={global.localization.getLang(
                    'lang_confirm_cancel',
                  )}
                  data={this.props.childList.map((item, index) => {
                    return {
                      label: item.displayName,
                      key: index,
                    };
                  })}
                  initValue={
                    this.props.childList[this.props.curChild]
                      .displayName
                  }
                  onChange={option => {
                    this.props.dispatch({
                      type: 'SELECT_CHILD',
                      curChild: option.key,
                    });
                  }}
                />
                <View style={styles.guardiansContainer}>
                  <View style={styles.guardiansHeaderContainer}>
                      <Text style={[commonStyles.text, commonStyles.textBold, styles.lblHeaderGuardiansList]}>
                        {global.localization.getLang("lang_guardians_list")}
                      </Text>
                  </View>
                  <FlatList 
                    style={styles.guardiansList}
                    showsVerticalScrollIndicator={false}    
                    data={this.props.guardians}
                    renderItem={({item})=>{
                        return (
                          <GuardianCom guardian={item} style={styles.optionContainer}/>
                          )
                    }}
                    keyExtractor={(item, index)=>{
                        return  index + "";
                    }}
                  />
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
        studentName: state.studentName,
        studentAvatar: state.studentAvatar,
        childList: state.childList,
        curChild: state.curChild,
        guardians: state.guardians
    }
}

export default connect(mapStateToProps)(ParentTab);
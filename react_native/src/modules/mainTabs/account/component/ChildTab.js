import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

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
                      onPress={()=>{
                          ImagePicker.showImagePicker(
                              options,
                              response => {
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
                                      uri: response.uri.replace(
                                        'file://',
                                        '',
                                      ),
                                      isStatic: true,
                                    };
                                  }
    
                                  this.props.dispatch({
                                    type: 'SET_STUDENT_AVATAR',
                                    avatar: source,
                                  });
                              }})
                      }}
                  >
                      <Image
                      style={styles.parentAvatar}
                      source={this.props.studentAvatar}
                      />
                  </TouchableOpacity>
                </View>
                <View style={styles.otherInfoContainer}>
                <View style={styles.parentNameContainer}>
                  <Text style={styles.parentName}>
                    {this.props.studentName}
                  </Text>
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
        studentAvatar: state.studentAvatar
    }
}

export default connect(mapStateToProps)(ParentTab);
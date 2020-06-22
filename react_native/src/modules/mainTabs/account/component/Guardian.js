import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CheckBox from 'react-native-check-box'

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const PICK_TYPE = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
};

const GUARDIAN_MAX = 4;

var GuardianContainer = (props)=>{
  var guardian = props.guardian;
  var guardianId = guardian.id;

  var _checked = props.guardians.filter((guardian)=>guardianId == guardian.id)[0].assigned[props.curChild] == 1;

  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={styles.checkboxContainer}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_ENABLE_GUARDIAN_ACC_INFO',
            guardianId: guardianId
          });
        }}
        isChecked={_checked}
        checkedImage={<Image source={require("../../../../../res/image/service/checked.png")} style={styles.imgCheckBox}/>}
        unCheckedImage={<Image source={require("../../../../../res/image/service/unchecked.png")} style={styles.imgCheckBox}/>}
      />
      <Image style={styles.guardianAvatar} source={guardian.avatarSource}/>
      <Text style={[commonStyles.text, commonStyles.textBold, styles.lblGuardian]}>{guardian.name}</Text>
    </View>
  );
}

const mapStateToProps = (state)=>{
    return {
        guardians: state.guardians,
        curChild: state.curChild
    }
}

export default connect(mapStateToProps)(GuardianContainer)

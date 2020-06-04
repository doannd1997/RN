import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from "@react-native-community/datetimepicker";

const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;
import {QuickToast} from "../../../utils/Toast";

const TimeUtils = require("../../../utils/Times").default;

const PICK_TYPE = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
};

const GUARDIAN_MAX = 4;

var GuardianContainer = (props)=>{
  var guardian = props.guardian;
  var guardianId = guardian.id;

  var _checked = props.guardians.filter((guardian)=>guardianId == guardian.id)[0].checked
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        centercheckedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={_checked}
        checkedColor={'#fff'}
        uncheckedColor={'#bbb'}
        onIconPress={() => {
          props.dispatch({
            type: 'TOGGLE_SELECT_GUARDIAN',
            guardianId: guardianId
          });
        }}
      />
      <Text style={styles.labelMethodItem}>{guardian.name}</Text>
    </View>
  );
}

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

class PageReg2 extends Component {
  render() {
    var self = this;

    return (
      <View style={styles.page}>
        <View style={styles.guardianHeaderContainer}>
          <Text style={styles.lblHeaderGuardians}>
            {global.localization
              .getLang('lang_select_guardians_max')
              .replace('@max@', GUARDIAN_MAX)}
            <Text style={{color: '#fff'}}>
              &nbsp; (
              {
                self.props.guardians.filter(guardian => guardian.checked)
                  .length
              }
              /{GUARDIAN_MAX})
            </Text>
          </Text>
        </View>
        <View style={styles.guardiansContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={true}
            data={self.props.guardians}
            renderItem={data => {
              return (
                <GuardianContainer {...self.props} guardian={data.item} />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
        <View style={styles.timeStartRemoveServiceContainer}>
          <Text style={styles.lblStartDate}>
            {global.localization.getLang('lang_select_date_remove_service')}
          </Text>
          <View style={styles.btnTimeContainer}>
            <TouchableOpacity
              style={styles.btnSelectTime}
              onPress={() => {
                self.props.dispatch({
                  type: 'SHOW_PICKING_SERVICE_DATE_START',
                });
              }}>
              <Text style={styles.lblBtnTimeStart}>
                {TimeUtils.formatDate(this.props.serviceStartTime)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnCancel}
              onPress={()=>{
                var header = global.localization.getLang("lang_confirm_remove_service_header");
                var content = global.localization.getLang("lang_confirm_remove_service_content");
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
                        QuickToast.show("Success");
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
              }}>
              <Text style={commonStyles.formBtnOkText}>
                {global.localization.getLang('lang_remove_service')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnConfirm}
              onPress={() => {
                var cost = 250000;
                var header = global.localization.getLang("lang_confirm_change_service_header");
                var content = global.localization.getLang("lang_confirm_change_service_content");
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
                        QuickToast.show("Success");
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
              }}>
              <Text style={commonStyles.formBtnOkText}>
                {global.localization.getLang('lang_change')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state)=>{
    return {
      pickTypeMethod: state.pickTypeMethod,
      serviceStartTime: state.serviceStartTime,
      isPickingDateStart: state.isPickingDateStart,
      curYear: state.curYear,
      guardians: state.guardians,
    }
}

export default connect(mapStateToProps)(PageReg2)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  pickUpMethodContainer: {
    flex: 1.5,
  },
  guardianHeaderContainer: {
    flex: 0.9,
    justifyContent: "center",
    paddingLeft: 20,
    alignItems: "flex-start"
  },  
  lblHeaderGuardians: {
    color: "#444",
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic"
  },
  guardiansContainer: {
    flex: 6.5,
    // backgroundColor: "cyan",
    paddingBottom: 3
  },
  timeStartRemoveServiceContainer: {
    flex: 1.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10
  },
  policyBtnContainer: {
    flex: 2
  },
  timeStartContainer: {
    flex: 0.5,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnContainer: {
    flex: 1.9,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  singleBtnContainer: {
    height: "100%",
    // width: 40,
    flex: 1,
  },
  optionContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  labelMethodItem: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    left: -20,
  },
  lblStartDate: {
    color: "#333",
    // fontWeight: "bold",
    fontStyle: "italic",
  },
  btnTimeContainer: {
    height: "100%",
    width: "50%",
    paddingRight: 5,
    justifyContent: "center"
  },
  btnSelectTime: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    borderRadius: 4,
  },
  lblBtnTimeStart: {
    color: "#ddd",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  lblPolicyHeader: {
    color: "#ddd",
    paddingLeft: -30,
    flex: 3.6,
    textAlign: "right"
  },
  lblPolicyBtn: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#002"
  }
})
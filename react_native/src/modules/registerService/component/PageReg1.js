import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import DateTimePicker from "@react-native-community/datetimepicker";

const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../color/Colors").default;

const TimeUtils = require("../../../utils/Times").default;

const PICK_TYPE = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
}

var OptionContainer = (props)=>{
  switch (props.arg){
    case PICK_TYPE.WITH_PARENT:
      var pickTypeStr = global.localization.getLang("lang_pick_method_with_parent");
      var checked = props.pickTypeMethod == PICK_TYPE.WITH_PARENT;
      break;
    case PICK_TYPE.ONLY_STUDENT:
      var pickTypeStr = global.localization.getLang("lang_pick_method_by_student");
      var checked = props.pickTypeMethod == PICK_TYPE.ONLY_STUDENT;
      break;
  };
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        centercheckedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked}
        checkedColor={'#fff'}
        uncheckedColor={'#bbb'}
        onIconPress={() => {
          props.dispatch({
            type: 'TOGGLE_PICK_TYPE_METHOD',
          });
        }}
      />
      <Text style={styles.labelMethodItem}>{pickTypeStr}</Text>
    </View>
  );
}

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

class PageReg1 extends Component {
  changeHome() {
    this.props.dispatch({type: 'TOGGLE_PICKING', changeType: CHANGE_TYPE.HOME});
  }
  changePlace() {
    this.props.dispatch({
      type: 'TOGGLE_PICKING',
      changeType: CHANGE_TYPE.PLACE,
    });
  }
  changeServiceStartTime(event, date){
    console.log(event);
    this.props.dispatch({type: "HIDE_PICKING_SERVICE_DATE_START"})
    if (event.type == "set"){
      var timeStamp = event.nativeEvent.timestamp;
      var curYear = this.props.curYear;
      console.log(new Date(timeStamp).getFullYear())
      if (new Date(timeStamp).getFullYear() == curYear)
        this.props.dispatch({type: "CHANGE_SERVICE_DATE_START", time: timeStamp})
      else {
        var toast = global.localization.getLang("lang_alert_wrong_year").replace("@year@", curYear);
        Toast.show(toast, Toast.LONG);
      }
    }
  };
  render() {
    var self = this;

    return (
      <View style={styles.page}>
        <View style={styles.pickUpMethodContainer}>
          <OptionContainer {...this.props} arg={PICK_TYPE.WITH_PARENT}></OptionContainer>
          <OptionContainer {...this.props} arg={PICK_TYPE.ONLY_STUDENT}></OptionContainer>
        </View>
        <View style={styles.partnerHeaderContainer}>
          <Text style={styles.lblHeaderPartner}>
            {global.localization.getLang("lang_partner_list")}
          </Text>
        </View>
        <View style={styles.partnerContainer}>
        </View>
        <View style={styles.timeStartContainer}>
          <Text style={styles.lblStartDateService}>
            {global.localization.getLang("lang_service_start_date")}
          </Text>
          <View style={styles.btnTimeContainer}>
            <TouchableOpacity style={styles.btnSelectTime}
            onPress={()=>{
              self.props.dispatch({type: "SHOW_PICKING_SERVICE_DATE_START"})
            }}>
              <Text style={styles.lblBtnTimeStart}>
                {TimeUtils.formatDate(this.props.serviceStartTime)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={commonStyles.formBtnConfirm}
          onPress={this.props.toPrevPage}
          >
            <Text style={commonStyles.formBtnOkText}>
              {global.localization.getLang('lang_next')}
            </Text>
          </TouchableOpacity>
        </View>
        {this.props.isPickingDateStart ? (
          <DateTimePicker
            ref="startDate"
            style={commonStyles.dateTimePicker}
            timeZoneOffsetInMinutes={0}
            value={new Date(this.props.serviceStartTime)}
            mode={'date'}
            is24Hour={true}
            display="calendar"
            onChange={this.changeServiceStartTime.bind(this)}
          />
        ) : null}
      </View>
    );
  }
}


const mapStateToProps = (state)=>{
    return {
      pickTypeMethod: state.pickTypeMethod,
      serviceStartTime: state.serviceStartTime,
      isPickingDateStart: state.isPickingDateStart,
      curYear: state.curYear
    }
}

export default connect(mapStateToProps)(PageReg1)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column"
  },
  pickUpMethodContainer: {
    flex: 1.5,
  },
  partnerHeaderContainer: {
    flex: 0.5,
    justifyContent: "center",
    paddingLeft: 30,
    alignItems: "flex-start"
  },  
  lblHeaderPartner: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  partnerContainer: {
    flex: 1.5,
    backgroundColor: "cyan"
  },
  timeStartContainer: {
    flex: 0.5,
    marginLeft: 30,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnContainer: {
    flex: 0.81
  },
  optionContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  labelMethodItem: {
    color: "#ddd",
    fontWeight: "bold",
    flex: 1,
    left: -20,
  },
  lblStartDateService: {
    color: "#222",
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
  }
})
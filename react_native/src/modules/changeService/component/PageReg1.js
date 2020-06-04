import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { CheckBox } from 'react-native-elements';
import CheckBox from 'react-native-check-box'
import DateTimePicker from "@react-native-community/datetimepicker";

const commonStyles = require("../../../common/style/index").default;
const colors = require("../../../common/style/index").default;
import {QuickToast} from "../../../utils/Toast";

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
        style={{flex: 1, padding: 3, justifyContent: "center", alignItems: "center"}}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_PICK_TYPE_METHOD',
          });
        }}
        isChecked={checked}
        checkBoxColor={"#fff"}
        checkedCheckBoxColor={"cyan"}

        // centercheckedIcon="dot-circle-o"
        // uncheckedIcon="circle-o"
        // checked={checked}
        // checkedColor={'#fff'}
        // uncheckedColor={'#bbb'}
        // onIconPress={() => {
        //   props.dispatch({
        //     type: 'TOGGLE_PICK_TYPE_METHOD',
        //   });
        // }}
      />
      <Text style={styles.labelMethodItem}>{pickTypeStr}</Text>
    </View>
  );
}

var PartnerContainer = (props)=>{
  var partner = props.partner;
  var partnerId = partner.id;

  var _checked = props.partners.filter((partner)=>{
    return partner.id == partnerId;
  })[0].checked;
  
  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={{flex: 1, padding: 3, justifyContent: "center", alignItems: "center"}}
        onClick={()=>{
          props.dispatch({
            type: 'TOGGLE_SELECT_PARTER',
            partnerId: partnerId
          });
        }}
        isChecked={_checked}
        checkBoxColor={"#fff"}
        checkedCheckBoxColor={"cyan"}


        // centercheckedIcon="dot-circle-o"
        // uncheckedIcon="circle-o"
        // checked={_checked}
        // checkedColor={'#fff'}
        // uncheckedColor={'#bbb'}
        // onIconPress={() => {
        //   console.log(partnerId)
        //   props.dispatch({
        //     type: 'TOGGLE_SELECT_PARTER',
        //     partnerId: partnerId
        //   });
        // }}
      />
      <Text style={styles.labelMethodItem}>{partner.name}</Text>
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
    this.props.dispatch({type: "HIDE_PICKING_SERVICE_DATE_START"})
    if (event.type == "set"){
      var timeStamp = event.nativeEvent.timestamp;
      var curYear = this.props.curYear;
      if (new Date(timeStamp).getFullYear() == curYear)
        this.props.dispatch({type: "CHANGE_SERVICE_DATE_START", time: timeStamp})
      else {
        var toast = global.localization.getLang("lang_alert_wrong_year").replace("@year@", curYear);
        QuickToast.show(toast);
      }
    }
  };
  render() {
    var self = this;
    return (
      <View style={styles.page}>
        <View style={styles.pickUpMethodContainer}>
          <OptionContainer {...this.props} arg={PICK_TYPE.WITH_PARENT} />
          <OptionContainer {...this.props} arg={PICK_TYPE.ONLY_STUDENT} />
        </View>
        <View style={styles.partnerHeaderContainer}>
          <Text style={styles.lblHeaderPartner}>
            {global.localization.getLang('lang_partner_list')} 
            <Text style={{color: "#fff"}}>
              &nbsp;
            ({
              this.props.partners.filter((partner)=>partner.checked).length
            }/{
              this.props.partners.length
            })
            </Text>
          </Text>
        </View>
        <View style={styles.partnerContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={true}
            data={self.props.partners}
            renderItem={data => {
              return (
                <PartnerContainer {...self.props} partner={data.item} />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnCancel}
              onPress={()=>{
                self.props.toPrevPage();
              }}>
              <Text style={commonStyles.formBtnOkText}>
                {global.localization.getLang('lang_prev')}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBtnContainer}>
            <TouchableOpacity
              style={commonStyles.formBtnConfirm}
              onPress={()=>{
                self.props.toNextPage();
              }}>
              <Text style={commonStyles.formBtnOkText}>
                {global.localization.getLang('lang_next')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.props.isPickingDateStart ? (
          <DateTimePicker
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
      curYear: state.curYear,
      partners: state.partners
    }
}

export default connect(mapStateToProps)(PageReg1)

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
  partnerHeaderContainer: {
    flex: 0.5,
    justifyContent: "center",
    paddingLeft: 50,
    alignItems: "flex-start"
  },  
  lblHeaderPartner: {
    color: "#444",
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic"
  },
  partnerContainer: {
    flex: 1.5,
    // backgroundColor: "cyan"
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
    flex: 0.81,
    width: "100%",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  singleBtnContainer: {
    height: "100%",
    // width: 40,
    flex: 1,
    backgroundColor: "red"
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
    // left: -20,
    flex: 5
  },
  lblStartDateService: {
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
  }
})
import React, {Component} from "react";
import {View, Text, Image, Alert, Picker} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import ModalSelector from "react-native-modal-selector";
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
import {QuickToast} from "../../../utils/Toast";

const ToolBar = require("../../../common/component/Toolbar").default;
const Times = require("../../../utils/Times").default;


class ReportAbsenceCom extends Component {
  constructor(props) {
    super(props);
  }
  onSelectDateStart(event, date){
    this.props.dispatch({type: "TOGGLE_PICKING_DATE_START", isPicking: false});
    if (date != undefined){
      var timeStamp = new Date(date.toString().slice(0, 10) + "").getTime();
      this.props.dispatch({type: "UPDATE_DATE_START", startDate: timeStamp})
    }
    
  }
  onSelectDateEnd(event, date){
    this.props.dispatch({type: "TOGGLE_PICKING_DATE_END", isPicking: false});
    if (date != undefined){
      var timeStamp = new Date(date.toString().slice(0, 10) + "").getTime();
      this.props.dispatch({type: "UPDATE_DATE_END", endDate: timeStamp})
    }
  }
  onConfirm(){
    var header = global.localization.getLang("lang_noti_header");
    var content = global.localization.getLang("lang_confirm_send_report_absence_content");
    const okLabel = global.localization.getLang(
      'lang_confirm_ok',
    );
    const cancelLabel = global.localization.getLang(
      'lang_confirm_cancel',
    );

    var startDate = Times.formatDate(this.props.startDate);
    var endDate = Times.formatDate(this.props.endDate)

    var pattStart = /@from@/gi;
    var pattEnd = /@to@/gi;

    content = content.replace(pattStart, startDate);
    content = content.replace(pattEnd, endDate);
    
    Alert.alert(
      header,
      content,
      [
        {
          text: okLabel,
          onPress: () => {
            QuickToast.show(global.localization.getLang('lang_report_absence_success'));
          },
        },
        {
          text: cancelLabel,
          onPress: () => {
            
          },
        },
      ],
      {cancelable: true},
    );
    
  }
  render() {
    var self = this;
    return (
      <View
        style={[
          commonStyles.fullViewVerticalCenter,
          commonStyles.screenWithToolBar,
        ]}>
        <ToolBar style={commonStyles.toolBar} params={{title: "lang_report_absentee", navigation: "HomeScreen"}}/>
        <View style={commonStyles.contentContainer}>
          <View style={commonStyles.divForm}>
            <View style={styles.defaultInfo}>
              <Image
                source={require('../../../../res/image/HomeScreen/education.png')}
                defaultSource={require('../../../../res/image/HomeScreen/education.png')}
                style={styles.avatar}
                resizeMode={'contain'}
              />
              <ModalSelector
                style={styles.childNameContainer}
                selectStyle={styles.childNameContent}
                initValueTextStyle={styles.childName}
                cancelText={global.localization.getLang("lang_cancel")}
                data={this.props.childList.map((item, index)=>{
                  return {
                    label: item.displayName,
                    key: index
                  }
                })}
                initValue={this.props.childList[this.props.curChild].displayName}
                onChange={(option)=>{
                  this.props.dispatch({type: 'SELECT_CHILD', curChild: option.key})
                }} />
            </View>
            <View style={[styles.btnCluster]}>
              <View style={[styles.formInputCluster]}>
                <View style={[styles.inputFieldItem]}>
                  <View style={[styles.inputFieldFirstColumn]}>
                    <Image source={require("../../../../res/image/HomeScreen/transport.png")} style={styles.iconBus}/>
                  </View>
                  <View
                    style={[
                      styles.inputFieldSecondColumn,
                      styles.inputFieldSecondColumnWithShadow,
                    ]}>
                      <ModalSelector
                        style={styles.busTypeContainer}
                        selectStyle={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}
                        initValueTextStyle={styles.txtBusType}
                        cancelText={global.localization.getLang("lang_cancel")}
                        data={[
                          {
                            label: (global.localization.getLang(
                              'lang_bus_both',
                            )),
                            key: 'BOTH',
                          },
                          {
                            label: (global.localization.getLang(
                              'lang_bus_pick_up',
                            )),
                            key: 'PICK_UP',
                          },
                          {
                            label: (global.localization.getLang(
                              'lang_bus_drop_down',
                            )),
                            key: 'DROP_DOWN',
                          },
                          
                        ]}
                        initValue={global.localization.getLang("lang_bus_" + this.props.busType.toLowerCase())}
                        onChange={(option)=>{
                          this.props.dispatch({type: 'TOGGLE_BUS_TYPE', busType: option.key})
                        }} />
                  </View>
              
                </View>
                <View style={styles.pickDateCluster}>
                  <LinearGradient style={[styles.pickDateItem]} colors={['#d9a8ed', '#e69865']} start={{ x: 0, y: 0 }} end={{ x: 0.35, y: 0.5 }}>
                    <View
                      style={[styles.btnPickerDateItem]}
                      >
                      <Text style={[styles.pickDateHeader]}>
                        {global.localization.getLang('lang_date_from')}
                      </Text>
                      <Text style={[styles.pickDateTime, eStyles.btnPickDateLabel]}>
                        {Times.formatDate(this.props.startDate)}
                      </Text>
                        <Image source={require("../../../../res/image/history/calendar.png")} style={styles.imgCalendar}
                        resizeMethod={"resize"}/>
                      <DatePicker
                        showIcon={false}
                        hideText={true}
                        date={Times.formatDate(new Date().getTime())}
                        mode="date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        style={{width: "100%", height: "100%", alignSelf: "center", position: "absolute"}} 
                        onDateChange={this.onSelectDateStart.bind(this)}
                      />
                    </View>
                  </LinearGradient>
                  <LinearGradient style={[styles.pickDateItem]} colors={['#d9a8ed', '#e69865']} start={{ x: 0, y: 0 }} end={{ x: 0.35, y: 0.5 }}>
                    <View
                      style={[styles.btnPickerDateItem]}
                      >
                      <Text style={[styles.pickDateHeader]}>
                        {global.localization.getLang('lang_date_to')}
                      </Text>
                      <Text style={[styles.pickDateTime, eStyles.btnPickDateLabel]}>
                        {Times.formatDate(this.props.endDate)}
                      </Text>
                        <Image source={require("../../../../res/image/history/calendar.png")} style={styles.imgCalendar}
                        resizeMethod={"resize"}/>
                      <DatePicker
                        showIcon={false}
                        hideText={true}
                        date={"05-06-2020"}
                        mode="date"
                        // placeholder="select date"
                        format="DD-MM-YYYY"
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        style={{width: "100%", height: "100%", alignSelf: "center", position: "absolute"}} 
                        onDateChange={this.onSelectDateEnd.bind(this)}
                      />
                    </View>
                  </LinearGradient>
                </View>
              </View>
              <View style={styles.btnConfirmContainer}>
                <TouchableOpacity
                  style={commonStyles.formBtnConfirm}
                  onPress={this.onConfirm.bind(this)}>
                  <Text style={[commonStyles.formBtnOkText, styles.txtOk]}>
                    {global.localization.getLang('lang_send_report_absence')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        busType: state.busType,
        isPickingDateStart: state.isPickingDateStart,
        isPickingDateEnd: state.isPickingDateEnd,
        startDate: state.startDate,
        endDate: state.endDate,
        childList: state.childList,
        curChild: state.curChild
    }
}

export default connect(mapStateToProps)(ReportAbsenceCom);

const eStyles = EStyleSheet.create({
  btnPickDateLabel: {
    fontSize: "10rem"
  }
})
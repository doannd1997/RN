import React, {Component} from "react";
import {View, Text, Image, Alert, Picker} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
import {QuickToast} from "../../../utils/Toast";

const ToolBar = require("../component/ToolBar").default;
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
        // {
        //   // text: global.localization.getLang(langItem),
        //   // onPress: () => console.log('May be Pressed'),
        // },
        {
          text: okLabel,
          onPress: () => {
            QuickToast.show(global.localization.getLang('lang_report_absence_success'));
          },
        },
        {
          text: cancelLabel,
          onPress: () => {
            console.log('Cancel Report');
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
        <ToolBar style={commonStyles.toolBar} />
        <View style={commonStyles.contentContainer}>
          <View style={commonStyles.divForm}>
            <View style={styles.defaultInfo}>
              <Image
                source={require('../../../../res/image/HomeScreen/education.png')}
                defaultSource={require('../../../../res/image/HomeScreen/education.png')}
                style={styles.avatar}
                resizeMode={'contain'}
              />
              <Text
                style={styles.childName}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                {this.props.childName} "Peter Packer"
              </Text>
            </View>
            <View style={[styles.btnCluster]}>
              <View style={[styles.formInputCluster]}>
                <View style={[styles.inputFieldItem]}>
                  <View style={[styles.inputFieldFirstColumn]}>
                    <Icon name={'bus-alt'} size={38} color={'#fff'} />
                  </View>
                  <View
                    style={[
                      styles.inputFieldSecondColumn,
                      styles.inputFieldSecondColumnWithShadow,
                    ]}>
                    <RNPickerSelect
                      style={{flex: 1}}
                      value={this.props.busType}
                      onValueChange={(itemValue, itemIndex) =>
                        this.props.dispatch({
                          type: 'TOGGLE_BUS_TYPE',
                          busType: itemValue,
                        })
                      }
                      items={[
                        {
                          label: ("\t" + global.localization.getLang(
                            'lang_bus_pick_up',
                          )),
                          value: 'PICK_UP',
                        },
                        {
                          label: ("\t" + global.localization.getLang(
                            'lang_bus_drop_down',
                          )),
                          value: 'DROP_DOWN',
                        },
                      ]}
                      // itemStyle={styles.pickerItem}>
                      placeholder={{}}
                    />
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
                      <Text style={[styles.pickDateTime]}>
                        {Times.formatDate(this.props.startDate)}
                      </Text>
                      <Icon name={'calendar-alt'} size={40} color={'#888'} />
                      <DatePicker
                        showIcon={false}
                        hideText={true}
                        date={Times.formatDate(new Date().getTime())}
                        mode="date"
                        // placeholder="select date"
                        format="DD-MM-YYYY"
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
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
                      <Text style={[styles.pickDateTime]}>
                        {Times.formatDate(this.props.endDate)}
                      </Text>
                      <Icon name={'calendar-alt'} size={40} color={'#888'} />
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
                  <Text style={[commonStyles.formBtnOkText]}>
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
        endDate: state.endDate
    }
}

export default connect(mapStateToProps)(ReportAbsenceCom)
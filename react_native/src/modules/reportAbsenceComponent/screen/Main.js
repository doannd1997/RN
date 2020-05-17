import React, {Component} from "react";
import {View, Text, Image, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from 'react-native-simple-toast';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;
const Times = require("../../../utils/Times").default;


class ReportAbsenceCom extends Component {
  constructor(props) {
    super(props);
  }
  onSelectDateStart(event, date){
    this.props.dispatch({type: "TOGGLE_PICKING_DATE_START", isPicking: false});
    if (event.type=="set"){
      var timeStamp = event.nativeEvent.timestamp;
      this.props.dispatch({type: "UPDATE_DATE_START", startDate: timeStamp})
    }
    
  }
  onSelectDateEnd(event, date){
    this.props.dispatch({type: "TOGGLE_PICKING_DATE_END", isPicking: false});
    if (event.type=="set"){
      var timeStamp = event.nativeEvent.timestamp;
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
            Toast.show(global.localization.getLang('lang_report_absence_success'), Toast.SHORT, [
              'UIAlertController',
            ]);
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
        <View style={commonStyles.divForm}>
          <Text style={commonStyles.divFormTitle}>
            {global.localization.getLang('lang_absence_report')}
          </Text>
          <View style={[styles.inputField]}>
            <View style={[styles.inputFieldItem]}>
              <Image
                style={[styles.inputFieldFirstColumn]}
                source={require('../../../../res/image/HomeScreen/education.png')}
                resizeMode="stretch"
              />
              <Text
                style={[
                  styles.inputFieldSecondColumn,
                  styles.pickerItem,
                  styles.childName,
                ]}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                selectable={true}>
                Child's Name Is Peter Packer
              </Text>
            </View>
            <View style={[styles.inputFieldItem]}>
              <View style={[styles.inputFieldFirstColumn]}>
                <Icon name={'bus-alt'} size={50} color={'#444'} />
              </View>
              <Picker
                style={styles.inputFieldSecondColumn}
                selectedValue={this.props.busType}
                onValueChange={(itemValue, itemIndex) =>
                  this.props.dispatch({
                    type: 'TOGGLE_BUS_TYPE',
                    busType: itemValue,
                  })
                }
                itemStyle={styles.pickerItem}>
                <Picker.Item
                  label={global.localization.getLang('lang_bus_pick_up')}
                  value="PICK_UP"
                />
                <Picker.Item
                  label={global.localization.getLang('lang_bus_drop_down')}
                  value="DROP_DOWN"
                />
              </Picker>
            </View>
            <View style={[styles.pickDateCluster]}>
              <View style={[styles.pickDateItem]}>
                <TouchableOpacity
                  style={[styles.btnPickerDateItem]}
                  onPress={() => {
                    this.props.dispatch({
                      type: 'TOGGLE_PICKING_DATE_START',
                      isPicking: true,
                    });
                  }}>
                  <Text style={[styles.pickDateHeader]}>
                    {global.localization.getLang('lang_date_from')}
                  </Text>
                  <Text style={[styles.pickDateTime]}>
                    {Times.formatDate(this.props.startDate)}
                  </Text>
                  <Icon name={'calendar-alt'} size={40} color={'#888'} />
                </TouchableOpacity>
              </View>
              <View style={[styles.pickDateItem]}>
                <TouchableOpacity
                  style={[styles.btnPickerDateItem]}
                  onPress={() => {
                    this.props.dispatch({
                      type: 'TOGGLE_PICKING_DATE_END',
                      isPicking: true,
                    });
                  }}>
                  <Text style={[styles.pickDateHeader]}>
                    {global.localization.getLang('lang_date_to')}
                  </Text>
                  <Text style={[styles.pickDateTime]}>
                    {Times.formatDate(this.props.endDate)}
                  </Text>
                  <Icon name={'calendar-alt'} size={40} color={'#888'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.btnCluster]}>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={this.onConfirm.bind(this)}>
              <Text style={[styles.txtOk]}>
                {global.localization.getLang('lang_confirm_ok')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.props.isPickingDateStart ? (
          <DateTimePicker
            ref="startDate"
            style={commonStyles.dateTimePicker}
            timeZoneOffsetInMinutes={0}
            value={new Date(this.props.startDate)}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.onSelectDateStart.bind(this)}
          />
        ) : null}
        {this.props.isPickingDateEnd ? (
          <DateTimePicker
            ref="endDate"
            style={commonStyles.dateTimePicker}
            timeZoneOffsetInMinutes={0}
            value={new Date(this.props.endDate)}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.onSelectDateEnd.bind(this)}
          />
        ) : null}
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
import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../component/ToolBar").default;


const options = ['Option1', 'Option2', 'Option3'];

// Labels is optional
const labels = ['Banana', 'Apple', 'Pear'];

class ReportAbsenceCom extends Component {
  constructor(props) {
    super(props);
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
            Phiếu thông tin báo nghỉ
          </Text>
          <View style={[styles.inputField]}>
            <View style={[styles.inputFieldItem]}>
              <Image
                style={[styles.inputFieldFirstColumn]}
                source={require('../../../../res/image/HomeScreen/education.png')}
                scale="stretch"
              />
              <Picker style={styles.inputFieldSecondColumn}
                selectedValue={this.props.busType}
                onValueChange={(itemValue, itemIndex) =>
                  this.props.dispatch({type: "TOGGLE_PICKING", busType: itemValue})
                }
                itemStyle={styles.pickerItem}
                >
                <Picker.Item label="Java" value="PICK_UP" />
                <Picker.Item label="JavaScript" value="DROP_DOWN" />
              </Picker>
            </View>
            <View style={[styles.inputFieldItem]} >
            <Image
                style={[styles.inputFieldFirstColumn]}
                source={require('../../../../res/image/HomeScreen/education.png')}
                scale="stretch"
              />
              <Picker style={styles.inputFieldSecondColumn}
                selectedValue={this.props.busType}
                onValueChange={(itemValue, itemIndex) =>
                  this.props.dispatch({type: "TOGGLE_PICKING", busType: itemValue})
                }
                itemStyle={styles.pickerItem}
                >
                <Picker.Item label="Java" value="PICK_UP" />
                <Picker.Item label="JavaScript" value="DROP_DOWN" />
              </Picker>
              </View>
            <View style={[styles.inputFieldItem]} />
          </View>
          <View style={[styles.btnCluster]} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        busType: state.busType
    }
}

export default connect(mapStateToProps)(ReportAbsenceCom)
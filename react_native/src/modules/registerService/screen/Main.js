import React, {Component, PureComponent} from "react";
import {View, Text, TextInput, Alert, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const MapViewCom = require("../component/MapView").default;
const YearPickerCom = require("../component/YearPicker").default;
const ToolBar = require("../component/ToolBar").default;
const Times = require("../../../utils/Times").default;

const CENTER_POINT = "21.007833,105.841361";
const COUNTRY_CODE = "VNM";
const LANG = "vn";
const PLACE_SEARCH = "@place_search@";

var URL = "https://discover.search.hereapi.com/v1/discover?at=" + CENTER_POINT + "&q=" + PLACE_SEARCH + "&countryCode:" + COUNTRY_CODE + "&lang=" + LANG + "&apikey=@api_key@";

class LocationItem extends PureComponent{
  render(){
    return (
      <TouchableOpacity>
        <Text>
          {this.props.description}
        </Text>
      </TouchableOpacity>
    )

  }
}

class RegisterService extends Component {
  constructor(props) {
    super(props);
  }
  onPress(){
    var place = "Số 1 Đại Cồ Việt";
    place = place.split(" ").join("+");
    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        Toast.show(request.responseText, Toast.SHORT, [
          'UIAlertController',
        ]);
      } else {
        Toast.show("ERR", Toast.SHORT, [
          'UIAlertController',
        ]);
      }
    };

    request.open('GET', URL.replace(PLACE_SEARCH, place));
    request.send();



  }
  render() {
    URL = URL.replace("@api_key@", global.userData.HERE_API_KEY);
    
    var self = this;
    return (
      <View
        style={[
          commonStyles.fullViewVerticalCenter,
          commonStyles.screenWithToolBar,
        ]}>
        <ToolBar style={commonStyles.toolBar} />
        <View style={styles.content}>
          <MapViewCom />
          <View style={[commonStyles.divForm, styles.divForm]}>
            {/* <Text style={commonStyles.divFormTitle}>
              {global.localization.getLang('lang_register_service')}
            </Text> */}
            <View style={styles.defaultInfo}>
              <Image
                source={require('../../../../res/image/HomeScreen/education.png')}
                defaultSource={require('../../../../res/image/HomeScreen/education.png')}
                style={styles.avatar}
                resizeMode={'contain'}
              />
              <Text style={styles.childName}>
                {this.props.childName} "Peter Packer"
              </Text>
            </View>

            <View style={styles.viewDivForm}>
              {/* <TouchableOpacity
                style={{width: 400, height: 30, backgroundColor: 'cyan'}}
                onPress={this.onPress.bind(this)}>
                <Text style={{color: '#000'}}>
                  {this.props.curYear} hello
                </Text>
              </TouchableOpacity> */}

              <YearPickerCom />
              <View style={styles.pickHome}>
                <View style={styles.pickItem}>
                  <View style={styles.pickCell0}>
                    <CheckBox
                      style={styles.checkbox}
                      centercheckedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checked={this.props.pickType == 'HOME'}
                      checkedColor={'#fff'}
                      uncheckedColor={'#bbb'}
                      onIconPress={()=>{
                        this.props.dispatch({type: "TOGGLE_PICK_TYPE"})
                      }}
                    />
                  </View>
                  <View style={styles.pickCell1}>
                    <Text style={styles.txtPick}>
                      {global.localization.getLang('lang_pick_at_home')}
                    </Text>
                  </View>
                </View>
                <View style={styles.pickSubItem}>
                  <View style={styles.pickCell0} />
                  <View style={styles.pickCell1}>
                    <Text style={styles.txtHomeAddress} numberOfLines={2}>
                      Số 1 Đại Cồ Việt - Hai Bà Trưng - Hà Nội
                    </Text>
                    <TouchableOpacity style={styles.btnChangeAddress}>
                      <Text style={styles.txtBtn}>
                        {global.localization.getLang('lang_change')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.pickPlace}>
                <View style={styles.pickItem}>
                  <View style={styles.pickCell0}>
                    <CheckBox
                      style={styles.checkbox}
                      centercheckedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checked={this.props.pickType == 'PLACE'}
                      checkedColor={'#fff'}
                      uncheckedColor={'#bbb'}
                      onIconPress={()=>{
                        this.props.dispatch({type: "TOGGLE_PICK_TYPE"})
                      }}
                    />
                  </View>
                  <View style={styles.pickCell1}>
                    <Text style={styles.txtPick}>
                      {global.localization.getLang('lang_pick_at_place')}
                    </Text>
                  </View>
                </View>
                <View style={styles.pickSubItem}>
                  <View style={styles.pickCell0} />
                  <View style={styles.pickCell1}>
                    <Text style={styles.txtHomeAddress} numberOfLines={2}>
                      {global.localization.getLang('lang_blank')}
                    </Text>
                    <TouchableOpacity style={styles.btnChangeAddress}>
                      <Text style={styles.txtBtn}>
                        {global.localization.getLang('lang_change')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
      curYear: state.curYear,
      yearList: state.yearList,
      pickType: state.pickType
    }
}

export default connect(mapStateToProps)(RegisterService)
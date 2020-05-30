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

const PlacePickerCom = require("../component/PlacePicker").default;

const CENTER_POINT = "21.007833,105.841361";
const COUNTRY_CODE = "VNM";
const LANG = "vn";
const PLACE_SEARCH = "@place_search@";
const HERE_API_KEY = "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4";

var URL = "https://discover.search.hereapi.com/v1/discover?at=" + CENTER_POINT + "&q=" + PLACE_SEARCH + "&countryCode:" + COUNTRY_CODE + "&lang=" + LANG + "&apikey=" + HERE_API_KEY;
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
  changeHome(){
    this.props.dispatch({type: "TOGGLE_PICKING"});
  }
  changePlace(){
    this.props.dispatch({type: "TOGGLE_PICKING"});
  }
  render() {
  
    return (
      <View
        style={[
          commonStyles.fullViewVerticalCenter,
          commonStyles.screenWithToolBar,
        ]}>
        <ToolBar style={commonStyles.toolBar} />
        <View style={styles.content}>
          <MapViewCom/>
          {this.props.pickingAddress ? (
            <PlacePickerCom {...this.props} />
          ) : (
            <View style={[commonStyles.divForm, styles.divForm]}>
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
                        onIconPress={() => {
                          this.props.dispatch({type: 'TOGGLE_PICK_TYPE'});
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
                        {this.props.homeAddress}
                      </Text>
                      <TouchableOpacity
                        style={styles.btnChangeAddress}
                        onPress={this.changeHome.bind(this)}>
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
                        onIconPress={() => {
                          this.props.dispatch({type: 'TOGGLE_PICK_TYPE'});
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
                        {this.props.placeAddress}
                      </Text>
                      <TouchableOpacity
                        style={styles.btnChangeAddress}
                        onPress={this.changePlace.bind(this)}>
                        <Text style={styles.txtBtn}>
                          {global.localization.getLang('lang_change')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={commonStyles.formBtnConfirm}>
                    <Text style={commonStyles.formBtnOkText}>
                      {global.localization.getLang('lang_send_register')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {!this.props.searchResultShown ? (
            <View style={styles.selectPlaceContainer}>
              <TouchableOpacity style={commonStyles.formBtnConfirm}>
                <Text style={commonStyles.formBtnOkText}>
                  {global.localization.getLang('lang_select_place')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      curYear: state.curYear,
      yearList: state.yearList,
      pickType: state.pickType,
      homeAddress: state.homeAddress,
      placeAddress: state.placeAddress,
      homeSetted: state.homeSetted,
      placeSetted: state.placeSetted,
      pickingAddress: state.pickingAddress,
      searchResultShown: state.searchResultShown
    }
}

export default connect(mapStateToProps)(RegisterService)
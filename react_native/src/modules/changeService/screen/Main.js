import React, {Component, PureComponent} from "react";
import {View, Text, ActivityIndicator , Alert, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import ModalSelector from "react-native-modal-selector";
const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;
import LinearGradient from 'react-native-linear-gradient';

const MapViewCom = require("../component/MapView").default;
const YearPickerCom = require("../component/YearPicker").default;
const PageReg0 = require("../component/PageReg0").default;
const PageReg1 = require("../component/PageReg1").default;
const PageReg2 = require("../component/PageReg2").default;

import { Pages } from 'react-native-pages';
import ViewPager from '@react-native-community/viewpager'
const ToolBar = require("../../../common/component/Toolbar").default;
const Times = require("../../../utils/Times").default;

const PlacePickerCom = require("../component/PlacePicker").default;

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

const CENTER_POINT = "21.007833,105.841361";
const COUNTRY_CODE = "VNM";
const LANG = "vn";
const PLACE_SEARCH = "@place_search@";
const HERE_API_KEY = "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4";

var URL = "https://discover.search.hereapi.com/v1/discover?at=" + CENTER_POINT + "&q=" + PLACE_SEARCH + "&countryCode:" + COUNTRY_CODE + "&lang=" + LANG + "&apikey=" + HERE_API_KEY;

class MyPageCom extends Component{
  selectPageReg0(){
    // Trang chọn địa điểm đón trả
    this.refs.pageViews.scrollToPage(0);
  }
  selectPageReg1(){
    // Trang chọn cách đón học sinh và học sinh đi cùng
    this.refs.pageViews.scrollToPage(1);
  }
  selectPageReg2(){
    // Trang chọn người giám hộ
    this.refs.pageViews.scrollToPage(2);
  }
  render(){
    return (
      <Pages
        indicatorColor={'transparent'}
        ref={'pageViews'}
        scrollEnabled={false}
        >
        <PageReg0
          key="0"
          {...this.props}
          toNextPage={this.selectPageReg1.bind(this)}
        />
        <PageReg1
          key="1"
          {...this.props}
          toPrevPage={this.selectPageReg0.bind(this)}
          toNextPage={this.selectPageReg2.bind(this)}
        />
        <PageReg2
          key="2"
          {...this.props}
          toPrevPage={this.selectPageReg1.bind(this)}
        />
      </Pages>
    );
  }
}


class RegisterService extends Component {
  
  render() {
    
    return (
      <View
        style={[
          commonStyles.fullViewVerticalCenter,
          commonStyles.screenWithToolBar,
        ]}>
        {this.props.isLoading ? (
          <ActivityIndicator
            color={colors.indicator}
            size="large"
            style={commonStyles.indicator}
          />
        ) : null}
        <ToolBar style={commonStyles.toolBar} {...this.props} params={{title: "lang_change_or_cancel_service", navigation: "HomeScreen"}}/>
        <View style={styles.content}>
          {this.props.pickingAddress ? <MapViewCom/> : null}
          {this.props.pickingAddress ? (
            <PlacePickerCom {...this.props} />
          ) : (
            <View style={commonStyles.contentContainer}>
              <View style={[commonStyles.divForm, styles.divForm]}>
              <LinearGradient
                style={[styles.defaultInfo]}
                colors={['#2c81d1', '#2fbdb6']}
                start={{x: 0.3, y: 0.6}}
                >
                <View style={styles.avatarContainer}>
                  <Image
                    source={this.props.studentList[this.props.curStudent].avatar}
                    defaultSource={require('../../../../res/image/HomeScreen/education.png')}
                    style={styles.avatar}
                    resizeMethod={"scale"}
                  />
                </View>
                <ModalSelector
                  style={styles.childNameContainer}
                  selectStyle={styles.childNameContent}
                  initValueTextStyle={styles.childName}
                  cancelText={global.localization.getLang("lanlang_confirm_cancelg_cancel")}
                  data={this.props.studentList.map((item, index)=>{
                    return {
                      label: item.studentName,
                      key: index
                    }
                  })}
                  initValue={this.props.studentList[this.props.curStudent].studentName}
                  onChange={(option)=>{
                    this.props.dispatch({type: 'SELECT_CHILD', curStudent: option.key})
                  }} />
              </LinearGradient>
              <View style={styles.viewDivForm}>
                <YearPickerCom />
                <View style={styles.pageViewContainer}>
                  <MyPage/>
                </View>
              </View>
            </View>
            </View>)}
          {!this.props.searchResultShown && this.props.pickingAddress && this.props.placeSelected != null ? (
            <View style={styles.selectPlaceContainer}>
              <TouchableOpacity
                style={commonStyles.formBtnConfirm}
                onPress={() => {
                  this.props.dispatch({type: 'CHOOSE_PLACE'});
                }}>
                <Text style={[commonStyles.formBtnOkText, styles.txtBtnSelectPlace]}>
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
      isLoading: state.isLoading,
      curYear: state.curYear,
      yearList: state.yearList,
      pickType: state.pickType,
      homeAddress: state.homeAddress,
      placeAddress: state.placeAddress,
      homeSetted: state.homeSetted,
      placeSetted: state.placeSetted,
      pickingAddress: state.pickingAddress,
      searchResultShown: state.searchResultShown,
      placeSelected: state.placeSelected,
      showAgreement: state.showAgreement,
      studentList: state.studentList,
      curStudent: state.curStudent,
      loading: state.loading
    }
}
const MyPage = connect(mapStateToProps)(MyPageCom);

export default connect(mapStateToProps)(RegisterService)
import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;


var navigateToLogIn = (navigation)=>{
  navigation.navigate("MainLogin");
}
var navigationToMethod = (methodName, navigation)=>{
  switch (methodName){
    case METHOD_CHILDREN_TRAKCING:
      navigation.navigate("ChildrenTracking");
      break;
    case METHOD_REPORT_ABSENTEE:
      navigation.navigate("ReportAbsence");
      break;
  }
}
var pressOnGrid = (props, methodName, navigation)=>{
    if (!props.logedIn) {
      var header = global.localization.getLang(
        'lang_noti_header',
      );
      var okLabel = global.localization.getLang(
        'lang_confirm_ok',
      );
      var cancelLabel = global.localization.getLang(
        'lang_confirm_cancel',
      );
      var content = global.localization.getLang(
        'lang_noti_login',
      );
      Alert.alert(
        header,
        content,
        [
          {
            // text: global.localization.getLang(langItem),
            // onPress: () => console.log('May be Pressed'),
          },
          {
            text: okLabel,
            onPress: () => {navigateToLogIn(navigation)},
          },
          {
            text: cancelLabel,
            onPress: () => {console.log('Cancel login')},
          },
        ],
        {cancelable: true},
      );
    }
    else {
        navigationToMethod(methodName, navigation)
    }
    
}

const Gridder = props => {
    const navigation = useNavigation();
    return (
        <FlatList 
                    style={styles.gridView} 
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    data={[
                        {color: '#2ecc71', lang: "lang_student_tracking", methodName: METHOD_CHILDREN_TRAKCING},
                        {color: '#3498db', lang: "lang_report_absentee", methodName: METHOD_REPORT_ABSENTEE},
                        {color: '#9b59b6', lang: "lang_register_service", methodName: METHOD_REGISTER_SERVICE},
                        {color: '#34495e', lang: "lang_change_or_cancel_service", methodName: METHOD_CHANGE_CANCEL_SERVICE},
                        {color: '#16a085', lang: "lang_register_guardian", methodName: METHOD_REGISTER_GUARDIAN},
                    ]}
                    renderItem={({item, index})=>{
                        return (
                            <View style={{paddingBottom: 8, paddingTop: 8, paddingLeft: 5, paddingRight: 5}}>
                              <LinearGradient style={{flex: 1}}
                                colors={["#ffffff", "#fff", "#2e36a6"]}
                                start={{x: 0.3, y: 0.5}}>
                                <TouchableOpacity 
                                    style={[styles.buttonGrid, {backgroundColor: "transparent"}]}
                                    onPress={()=>{
                                        pressOnGrid(props, item.methodName, navigation)
                                    }}
                                >
                                    <Image source={require("../../../../res/image/HomeScreen/vinbus.png")} style={styles.imgTheme}
                                    resizeMode={"stretch"}/>
                                    <Text style={styles.buttonGridHeader}>
                                        {global.localization.getLang(item.lang)}
                                    </Text>
                                </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index)=>index.toString()}
                />
    )
};

const mapStateToProps = state => ({
  logedIn: state.logedIn
});

const METHOD_CHILDREN_TRAKCING = "METHOD_CHILDREN_TRAKCING"
const METHOD_REGISTER_SERVICE = "METHOD_REGISTER_SERVICE"
const METHOD_REPORT_ABSENTEE = "METHOD_REPORT_ABSENTEE"
const METHOD_REGISTER_GUARDIAN = "METHOD_REGISTER_GUARDIAN"
const METHOD_CHANGE_CANCEL_SERVICE = "METHOD_CHANGE_CANCEL_SERVICE"

export default connect(mapStateToProps)(Gridder);
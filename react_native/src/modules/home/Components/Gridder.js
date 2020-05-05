import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

const Gridder = props => {
    pressOnGrid = (langItem)=>{
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
                text: global.localization.getLang(langItem),
                onPress: () => console.log('May be Pressed'),
              },
              {
                text: okLabel,
                onPress: () => console.log('Yes Pressed'),
              },
              {
                text: cancelLabel,
                onPress: () => console.log('OK Pressed'),
              },
            ],
            {cancelable: true},
          );
        }
        
    }

    return (
        <FlatList 
                    style={styles.gridView} 
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    data={[
                        {color: '#2ecc71', lang: "lang_student_tracking",},
                        {color: '#3498db', lang: "lang_report_absentee"},
                        {color: '#9b59b6', lang: "lang_register_service"},
                        {color: '#34495e', lang: "lang_change_or_cancel_service"},
                        {color: '#16a085', lang: "lang_register_guardian"},
                    ]}
                    renderItem={({item, index})=>{
                        return (
                            <View style={{paddingBottom: 8, paddingTop: 8, paddingLeft: 5, paddingRight: 5}}>
                                <TouchableOpacity 
                                    style={[styles.buttonGrid, {backgroundColor: item.color}]}
                                    onPress={()=>{
                                        pressOnGrid(item.lang)
                                    }}
                                >
                                    <Text style={styles.buttonGridHeader}>
                                        {global.localization.getLang(item.lang)}
                                    </Text>
                                </TouchableOpacity>
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

export default connect(mapStateToProps)(Gridder);
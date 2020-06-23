import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity, ScrollView} from "react-native"
import {connect} from "react-redux"
import ImagePicker from 'react-native-image-picker';
import ModalSelector from "react-native-modal-selector";
import { FlatList } from "react-native-gesture-handler";

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const GuardianCom = require("../component/Guardian").default;

class ChildInfo extends Component{
    render(){
        return (
            <View style={[commonStyles.fullViewVerticalCenter, {backgroundColor: "#fff"}]}>
                <ScrollView style={{width: "100%", height: "100%"}}
                    contentContainerStyle={[styles.scrollViewCotainer]}
                    showsVerticalScrollIndicator={false}
                    >
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_full_name")}: {"\t"}<Text style={styles.txtInfoContent}>[Họ tên học sinh]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_student_code")}: {"\t"}<Text style={styles.txtInfoContent}>[Sô hiệu học sinh]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_grade")}: {"\t"}<Text style={styles.txtInfoContent}>[Khối]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_school_place")}: {"\t"}<Text style={styles.txtInfoContent}>[Cơ sở học]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_header")}: {"\t"}<Text style={styles.txtInfoContent}>[Hình thức đón trả]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_place")}: {"\t"}<Text style={styles.txtInfoContent}>[Địa điểm đón]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>[Thời gian đón dự kiến]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_drop_place")}: {"\t"}<Text style={styles.txtInfoContent}>[Địa điểm trả]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_drop_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>[Thời gian trả dự kiến]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_bus_id")}: {"\t"}<Text style={styles.txtInfoContent}>[Số hiệu tuyến buýt]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_driver")}: {"\t"}<Text style={styles.txtInfoContent}>[Tên tài xế]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_driver_phone")}: {"\t"}<Text style={styles.txtInfoContent}>[Điện thoại tài xế]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_monitor")}: {"\t"}<Text style={styles.txtInfoContent}>[Tên nhân viên giám sát]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_monitor_phone")}: {"\t"}<Text style={styles.txtInfoContent}>[Số điện thoại nhân viên giám sát]</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_start_date_service")}: {"\t"}<Text style={styles.txtInfoContent}>[Ngày bắt đầu dịch vụ]</Text>
                    </Text>
                </ScrollView>
            </View>
        )     
    }
};

const mapStateToProps = (state)=>{
    return {
        childList: state.childList,
        curChild: state.curChild
    }
}

export default connect(mapStateToProps)(ChildInfo);
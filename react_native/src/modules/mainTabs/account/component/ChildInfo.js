import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList, Image, TouchableOpacity, ScrollView} from "react-native"
import {connect} from "react-redux"

import {StoreDefault} from "../../../home/redux/Redux";

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
                        {global.localization.getLang("lang_full_name")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.studentName)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_student_code")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.studentCode)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_grade")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.studentGrade)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_school_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.studentSchool)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_header")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(getPickUpOption(this.props.studentInfo.pickUpOption))}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.pickUpPlace)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_pick_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.pickUpTime)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_drop_place")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.dropOffPlace)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_drop_time_estimate")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.dropOffTime)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_bus_id")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.bks)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_driver")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.driverName)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_driver_phone")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.driverPhoneNumber)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_monitor")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.monitorName)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_monitor_phone")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.monitorPhoneNumber)}</Text>
                    </Text>
                    <Text style={[commonStyles.text, commonStyles.textBold, styles.txtInfoHeader]}>
                        {global.localization.getLang("lang_start_date_service")}: {"\t"}<Text style={styles.txtInfoContent}>{getParsedField(this.props.studentInfo.availableDateNextYear)}</Text>
                    </Text>
                </ScrollView>
            </View>
        )     
    }
};

const mapStateToProps = (state)=>{
    return {
        studentList: state.studentList,
        curStudent: state.curStudent,
        studentInfo: state.studentList[state.curStudent].routes[StoreDefault.PICK_TYPE]
    }
}

export default connect(mapStateToProps)(ChildInfo);

const getPickUpOption = (field)=>{
    switch (field){
        case "home":
            return global.localization.getLang("lang_pick_at_home")
        case "place":
            return global.localization.getLang("lang_pick_at_place")
    }
}

const getParsedField = (field)=>{
    return field || "---"
}
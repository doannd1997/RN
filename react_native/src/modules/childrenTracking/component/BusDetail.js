import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import MapView, {Marker} from 'react-native-maps';

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const colors = require("../../../color/Colors").default;

class BusDetail extends Component{
    render(){
        var self = this;
        return (
        <View style={[styles.busInfoContainer]}>
            <View
                style={[
                commonStyles.fullViewVerticalCenter,
                styles.panelInfo,
                ]}
            />
            <View
                style={[
                commonStyles.fullViewVerticalTopDown,
                styles.busInfoContainer_2,
                ]}>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_bus_name")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        [Tên tuyến Bus]
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_bks")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        [Biển Kiểm Soát]
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_driver")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        [Tên tài xế]
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_monitor")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        [Tên giám sát]
                    </Text>
                </View>
                <View style={styles.itemBusInfoContainer}>
                    <Text style={styles.itemBusHeader}>
                        {global.localization.getLang("lang_time_bus_pick")}:&nbsp;&nbsp;&nbsp;
                    </Text>
                    <Text style={styles.itemBusTxt}>
                        [Giờ đón trả]
                    </Text>
                </View>
            </View>
          </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}

export default connect(mapStateToProps)(BusDetail)
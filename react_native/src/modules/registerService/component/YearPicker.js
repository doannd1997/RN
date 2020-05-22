import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const styles = require("../style/styles").default;

class YearPicker extends Component{
    render(){
        return (
            <View style={styles.YearPickerContainer}>
                <MultiSlider style={styles.YearPicker}
                min={2019}
                max={2021}
                value={[2019, 2020, 2021]}
                step={1}
                allowOverlap={false}
                // customMarker={CustomMarker}
                snapped={true}
                enableLabel={true}
                // vertical={true}
                sliderLength={60}
                >

                </MultiSlider>
            </View>
        )
    }
}




const mapStateToProp = (state)=>{
    return {

    }
};

export default connect(mapStateToProp)(YearPicker);

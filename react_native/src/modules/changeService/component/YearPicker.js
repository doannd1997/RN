import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import Swiper from 'react-native-swiper'

const styles = require("../style/styles").default;

class YearPicker extends Component{
    render(){
        var comArr = this.props.yearList.map(year => {
          return <Text style={styles.itemYearPicker} key={year}>{year}</Text>;
        });
        return (
          <View style={styles.YearPickerContainer}>
            <Swiper
              showsButtons
              showsPagination={false}
              onIndexChanged={index => {
                this.props.dispatch({
                  type: 'CHANGE_YEAR',
                  year: this.props.yearList[index],
                });
              }}
              nextButton={<Text style={styles.btnYearPickerNavigate}>›</Text>}
              prevButton={<Text style={styles.btnYearPickerNavigate}>‹</Text>}
              >
              {comArr}
            </Swiper>
          </View>
        );
    }
}




const mapStateToProp = (state)=>{
    return {
        yearList: state.yearList
    }
};

export default connect(mapStateToProp)(YearPicker);

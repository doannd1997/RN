import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const store = require("../redux/Redux").default;

const Item = require("../component/TakeOffDetail").default;
const Header = require("../component/TakeOffHeader").default;

const ToolBar = require("../component/ToolBar").default;

class Main extends Component{
    onSelectDate(event, date){
        this.props.dispatch({type: "TOGGLE_PICKING"})
    }
    onSectionListRefresh(){
      
    }
    render(){
        return (
          <View style={styles.container}>
            <ToolBar />
            <SectionList
              style={styles.sectionList}
              sections={this.props.history}
              keyExtractor={(item, index) => item + index}
              renderItem={({item, index}) => (
                <Item {...this.props} data={item} index={index} />
              )}
              renderSectionHeader={({section: {title}}) => (
                <Header {...this.props} title={title} />
              )}
              initialNumToRender={10}
              // onEndReached={()=>{console.log("end reched")}}
              progressViewOffset={100}
              onRefresh={this.onSectionListRefresh.bind(this)}
              refreshing={false}
            />
            {this.props.isPickingDate ? (
              <View style={styles.dateTimePickerContainer}>
                <DateTimePicker
                  style={{width: "100%", height: "100%"}}
                  timeZoneOffsetInMinutes={0}
                  value={new Date()}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={this.onSelectDate.bind(this)}
                />
              </View>
              
            ) : null}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        history: state.history,
        isPickingDate: state.isPickingDate
    }
}

export default connect(mapStateToProps)(Main);


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    sectionList: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff"
    },
    dateTimePickerContainer: {
      backgroundColor: "#eee",
      width: "100%",
      height: "30%"
    }
})
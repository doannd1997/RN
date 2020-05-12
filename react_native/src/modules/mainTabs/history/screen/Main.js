import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
const store = require("../redux/Redux").default;

const Item = require("../component/TakeOffDetail").default;
const Header = require("../component/TakeOffHeader").default;

class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SectionList style={styles.sectionList}
                    sections={this.props.history}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => <Item {...this.props} name={item} index={index}/>}
                    renderSectionHeader={({ section: { title } }) => (
                      <Header {...this.props} title = {title}/>
                    )}
                    initialNumToRender={10}
                >

                </SectionList>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        history: state.history
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
    }
})
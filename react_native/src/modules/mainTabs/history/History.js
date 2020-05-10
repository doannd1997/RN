import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect} from "react-redux"



class History extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Hello {this.props.logedIn?"loged":"not logedin"}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(History);


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})
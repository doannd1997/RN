import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect} from "react-redux"

class Main extends Component{
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
    return {
        logedIn: state.logedIn
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
    }
})
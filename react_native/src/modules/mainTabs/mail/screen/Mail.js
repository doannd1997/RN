import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const HistoryComponent = require("./Main").default;

const NotLogInCom = require("../../../../common/component/NotLogInCom").default;

class Mail extends Component{
    render(){
        return (
            <View style={styles.container}>
            {this.props.logedIn ? (
              <HistoryComponent style={styles.container} />
            ) : (
              <NotLogInCom/>
            )}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(Mail);


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})

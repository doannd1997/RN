import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const HistoryComponent = require("./Main").default;
const store = require("../redux/Redux").default;

class Mail extends Component{
    render(){
        return (
          <Provider store = {store}>
            <View style={styles.container}>
            {this.props.logedIn ? (
              <HistoryComponent style={styles.container} />
            ) : (
              <Text style={[commonStyle.textBold, {color: "grey"}]}>
                {global.localization.getLang('lang_noti_login')}
              </Text>
            )}
          </View>
          </Provider>
          
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

const commonStyle = require("../../../../common/style/index").default;
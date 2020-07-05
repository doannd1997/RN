import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native"
import {connect, Provider} from "react-redux"

const MailComponent = require("./Main").default;
const NotLogInCom = require("../../../../common/component/NotLogInCom").default;

const NetWorking = require("../networking/NetWorking").default

import {QuickToast} from "../../../../utils/Toast"

const resultLoadMail = function(props){
    props.dispatch({type: "MAIL_STOP_LOAD"})
}

const updateMail = function(props){
    props.dispatch({type: "MAIL_START_LOAD"})
    NetWorking.apiRequestGetMessages(props, (responseText)=>{
        var json = JSON.parse(responseText)
        global.mailData.setData(json)

        var inboxs = global.mailData.getInboxs()
        var sents = global.mailData.getSents()
        props.dispatch({
            type: "SET_MAIL",
            inboxs: inboxs,
            sents: sents
        })

        var numberOfNewMails = inboxs.filter(item=>!item.isRead).length
        if (props.numberOfNewMails != numberOfNewMails){
            props.dispatch({type: "SET_NUM_NEW_MAIL", numberOfNewMails: numberOfNewMails})
            QuickToast.show(global.localization.getLang("noti_new_mail").replace(/@num@/gi, numberOfNewMails))
        }

        resultLoadMail(props)
    }, 
    ()=>{
        resultLoadMail(props)
    })
}

class Mail extends Component{
    componentWillMount(){
        updateMail(this.props)        
        var self = this
        this.updateScheduler = setInterval(() => {
            updateMail(self.props)
        }, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.updateScheduler)
    }
    render(){
        return (
            <View style={styles.container}>
            {this.props.logedIn ? (
              <MailComponent style={styles.container} />
            ) : (
              <NotLogInCom/>
            )}
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn,
        numberOfNewMails: state.numberOfNewMails
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

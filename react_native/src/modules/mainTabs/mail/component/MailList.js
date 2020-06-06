import React, {Component} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import {redux, connect} from "react-redux";

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const Mail = require("../component/Mail").default;
const colors = require("../../../../color/Colors").default;

class MailListCom extends Component{
    render(){
        return (
            <FlatList style={[{flex: 1}]}
                initialNumToRender={10}
                data={this.props.curTab == 0 ? this.props.inbox : this.props.sentMail}
                keyExtractor={(data, key)=>key}
                renderItem={(data)=>{
                    return <Mail data={data}/>
                }}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab,
        inbox: state.inbox,
        sentMail: state.sentMail
    }
};

export default connect(mapStateToProps)(MailListCom);
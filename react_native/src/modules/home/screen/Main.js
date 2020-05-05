import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;

class ToolBar extends Component{
    render(){
        console.log("tool bar props " + JSON.stringify(this.props))
        return (
            <View style={commonStyles.toolBar}>
                {!this.props.logedIn ? <ToolBarBtnLogin/> : null}
                {this.props.logedIn ? <ToolbarUser/> : null}
            </View>
        )
    }
}
class ToolBarBtnLogin extends Component{
    render(){
        var self = this;
        return (
            <TouchableOpacity style={styles.btnLogin} onPress={()=>{self.props.dispatch({action: "LOG_IN"})}}>
                <Text style={[commonStyles.textBold, commonStyles.text]}>
                    {global.localization.getLang("lang_login")}
                </Text>
            </TouchableOpacity>
        )
    }
}

class ToolbarUser extends Component{
    render(){
        return(
            <View style={styles.toolBarUser}>
                <Image 
                    source={require('../../../../res/image/HomeScreen/aquatic.png')}  
                    style={styles.avatar} 
                />
                <Text style={commonStyles.text}>
                    Hello, Developer
                </Text>
            </View>
        )
    }
}


class HomeScreenCom extends Component{
    pressOnGrid(langItem){
        var header = global.localization.getLang("lang_noti_header");
        var okLabel = global.localization.getLang("lang_confirm_ok");
        var cancelLabel = global.localization.getLang("lang_confirm_cancel");
        var content = global.localization.getLang("lang_noti_login");
        Alert.alert(
            //title
            header,
            //body
            content,
            [
                {text: langItem, onPress: () => console.log('May be Pressed')},
                {text: okLabel, onPress: () => console.log('Yes Pressed')},
                {text: cancelLabel, onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: true }
            );
    }
    pressLogIn(){
        this.props.dispatch({action: "LOG_IN"})
    }
    render(){
        return (
            <View style={commonStyles.fullViewVerticalTopDown}>
                <View style={commonStyles.toolBar}>
                    {!this.props.logedIn ? 
                        <TouchableOpacity 
                            style={styles.btnLogin} 
                            onPress={()=>{this.props.dispatch({type: "LOG_IN"})}}
                        >
                            <Text style={[commonStyles.textBold, commonStyles.text]}>
                                    {global.localization.getLang("lang_login")}
                            </Text>
                        </TouchableOpacity> : null}
                    {this.props.logedIn ? 
                        <View style={styles.toolBarUser}>
                            <Image 
                                source={require('../../../../res/image/HomeScreen/aquatic.png')}  
                                style={styles.avatar} 
                            />
                            <Text style={commonStyles.text}>
                                Xin Chào, Developer!
                            </Text>
                        </View>
                     : null}
                </View>
                <FlatList 
                    style={styles.gridView} 
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    data={[
                        {color: '#2ecc71', lang: "lang_student_tracking",},
                        {color: '#3498db', lang: "lang_report_absentee"},
                        {color: '#9b59b6', lang: "lang_register_service"},
                        {color: '#34495e', lang: "lang_change_or_cancel_service"},
                        {color: '#16a085', lang: "lang_register_guardian"},
                    ]}
                    renderItem={({item, index})=>{
                        return (
                            <View style={{paddingBottom: 8, paddingTop: 8, paddingLeft: 5, paddingRight: 5}}>
                                <TouchableOpacity 
                                    style={[styles.buttonGrid, {backgroundColor: item.color}]}
                                    onPress={()=>{
                                        this.pressOnGrid(item.lang)
                                    }}
                                >
                                    <Text style={styles.buttonGridHeader}>
                                        {global.localization.getLang(item.lang)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index)=>index.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(HomeScreenCom)
import React, {Component} from "react";
import {View, Text, Image} from "react-native";
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
    pressLogIn(){
        this.props.dispatch({action: "LOG_IN"})
    }
    render(){
        return (
            <View style={commonStyles.fullViewCenterVertical}>
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
                <Text>Home</Text>
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
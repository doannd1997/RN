import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {redux, connect} from "react-redux";

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;

const TimeUtils = require("../../../utils/Times").default;

class Guardian extends Component{
    render(){
        return (
          <View style={[styles.guardianContainer]}>
            <TouchableOpacity style={commonStyles.fullBtn}
                // disabled
            >
              <View style={[styles.btnGuardian]}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} 
                        defaultSource={require("../../../../res/image/HomeScreen/user.png")}
                        source={{uri: "https://img.favpng.com/21/14/14/auxiliary-police-lawyer-png-favpng-hedbA0ATF4nxzw8Bsu9SFTFqq.jpg"}}
                        resizeMethod="resize"
                    />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoNameContainer}>
                        <Text style={[commonStyles.text, styles.textName]}>
                            Hello
                        </Text>
                    </View>
                    <View style={styles.infoElementcontainer}>

                    </View>
                    <View style={styles.infoElementcontainer}>

                    </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect(mapStateToProps)(Guardian);
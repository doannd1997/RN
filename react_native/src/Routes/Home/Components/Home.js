import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello World</Text>
            </View>
        )
    }
}
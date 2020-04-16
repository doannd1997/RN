import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component{
    render(){
        console.log(111);
        return(
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text>Hello World</Text>
            </View>
        );
        
    }
}

export default Home;
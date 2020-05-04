import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Image } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();


const commonStyles = require("../../../common/style/index").default;

const HomeScreenComponent = require("../../home/screen/HomeScreen").default;

class App extends Component{
    render(){
        return  (
            <Stack.Navigator
                mode="modal"
                headerMode="none"
            >
                <Stack.Screen 
                    name = "HomeScreen" 
                    component = { HomeScreen }
                    options = { {title: "Màn hình chính"} }
                />
                <Stack.Screen 
                    name = "DetailScreen" 
                    component = { DetailScreen }
                    // options = { ({route})=>({title: route.params.title}) }
                    initialParams = { { _default: "default "}}
                />
                <Stack.Screen
                    name = "CustomHeaderScreen"
                    component = { CustomHeaderScreen }
                    options = { {
                        headerTitle: props => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                            //   color="#fff"
                            />
                            ),
                            headerBackTitle : ()=> "Button Back"
                    } }
                    
                />
            </Stack.Navigator>
        )
        
    }
};


function HomeScreen({ route, navigation }){
    var post = route.params?.post;
    return (
        <View style={styles.fullScreen}>
            <HomeScreenComponent></HomeScreenComponent>
        </View>
    )
};

function DetailScreen({ route, navigation }){
    var { name, id, _default } = route.params;

    const [post, setPost] = useState('');
    return (
        <View
            style = { styles.fullScreen }
        >
            <Text>
                Detail Screen
            </Text>
            <Text>
                passes param: {name} + & + {id} + default param: + {_default}
            </Text>
            <Button
                title = "Back to Home"
                onPress = { ()=> navigation.navigate("HomeScreen") }
            />
            <Button 
                title = "Go to Detail again"
                onPress = { ()=> navigation.push("DetailScreen") }
            />
            <Button
                title = "Go back"
                onPress = { ()=> navigation.goBack() }
            />
            <Button
                title = "Go to first screen"
                onPress = { ()=> navigation.popToTop() }
            />
            <TextInput
                placeholder = "type and be back to Home"
                value = {post}
                onChangeText = {setPost}
            />
            <Button
                title = "Result to Home"
                onPress = { ()=>navigation.navigate("HomeScreen", { post: post })}
            >

            </Button>
        </View>
    )
}


function LogoTitle(){
    return (
        <View style={{flexDirection: "row"}}>
        <Image
            style = { {width: 60, height: 50} }
            source = { require("../../../../res/image/HomeScreen/aquatic.png") }
        />
        <Button title="more button"/>
        </View>
    )
};
function CustomHeaderScreen({ route, navigation }){
    return (
        <View>
            <Button
                title = " Back to Home"
                onPress = { ()=> navigation.navigate("HomeScreen")}
            />
            <Button title="more button"/>

        </View>
    )
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redScreen: {
        backgroundColor: 'red'
    },
    blueScreen: {
        backgroundColor: 'blue'
    }
});

export default App;
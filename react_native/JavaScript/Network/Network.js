import React, { Component } from 'react';
import { View, Text } from 'react-native';

import serverConfig from '~/res/Network/Network.json'

export default class Newwork extends Component{
    logJsonConfig = ()=>{
        console.log(serverConfig);
    };
    fetchJson = async function(){
        const request = "http://time.jsontest.com./";
        try {
            let response = await fetch(request);
            let json = await response.json();
            console.log(json);
        }
        catch (e){
            console.error(e);
        }
    };
    fetchJsonLocal = async ()=>{
        const request = "192.168.1.10:8080/demo.json";
        fetch(request)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }
        })
        .then(response => {
          console.log(response);
          // ...
        }).catch(error => {
          console.error(error);
        });
    };
    render(){
        this.logJsonConfig();
        this.fetchJson();
        // this.fetchJsonLocal();
        return (
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        )
    }
}
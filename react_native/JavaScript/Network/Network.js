import React, { Component } from 'react';
import { View, Text } from 'react-native';
import beautify from "json-beautify";

import getUrl from "./getUrl";
const hostUrl = getUrl();
const staticUrl = hostUrl + "static/";

export default class Newwork extends Component{
    fetchJson = async function(){
        // const request = "https://reactnative.dev/movies.json";
        const request = staticUrl + "package.json";
        try {
            let response = await fetch(request);
            let json = await response.json();
            console.info("server package.json:\n", beautify(json, null, 2, 80));
        }
        catch (e){
            console.error(e);
        }
    };
    requestLocal = async ()=>{
      var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          console.info('success:\n', request.responseText);
        } else {
          console.warn('error');
        }
      };
      
      request.open('GET', hostUrl);
      request.send();
    };
    render(){
        this.fetchJson();
        this.requestLocal();
        return (
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        )
    }
}
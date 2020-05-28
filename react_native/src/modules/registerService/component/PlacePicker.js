import React, {Component, useState} from "react";
import {View, FlatList, Text, TouchableOpacity, TextInput} from "react-native";
import {connect} from "react-redux";
import Toast from 'react-native-simple-toast';

const styles = require("../style/styles").default;

const CENTER_POINT = "21.007833,105.841361";
const COUNTRY_CODE = "VNM";
const LANG = "vn";
const PLACE_SEARCH = "@place_search@";
const HERE_API_KEY = "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4";

var URL = "https://discover.search.hereapi.com/v1/discover?at=" + CENTER_POINT + "&q=" + PLACE_SEARCH + "&countryCode:" + COUNTRY_CODE + "&lang=" + LANG + "&apikey=" + HERE_API_KEY;


const onPress=(text, setPlace)=>{
    text = text.split(" ").join("+");
    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
          var res = JSON.parse(JSON.stringify(request.responseText));
        Toast.show(res.items, Toast.SHORT, [
          'UIAlertController',
        ]);
        // console.log(request.responseText.items)
      } else {
        Toast.show("ERR", Toast.SHORT, [
          'UIAlertController',
        ]);
      }
    };

    request.open('GET', URL.replace(PLACE_SEARCH, text));
    request.send();

  }

const PlacePicker = (props)=>{
    var [places, setPlace] = useState([]);
    return (
        <View style={styles.PlacePickerContainer}>
            <View style={styles.txtContainer}>
                <View style={styles.placeSearchPanel}/>
                <TextInput style={styles.txtPlace}
                    caretHidden={false}
                    clearButtonMode={"always"}
                    onChangeText={(text)=>{
                        setPlace("100")
                        onPress(text, setPlace);
                    }}
                    placeholder={global.localization.getLang("lang_input_address")}
                >
                </TextInput>
            </View>
            <Text>
                {/* {places.map(place=>{
                    return "[" + place.title + "]" + place.position.toString();
                })} */}
            </Text>
        </View>
    )
};

const mapStateToProps = (state)=>{
    return {
        homeAddress: state.homeAddress
    };
}

export default connect(mapStateToProps)(PlacePicker);


sample_res = {
    "items": [
        {
            "title": "Ngo Trai Ca, Quan Hai Ba Trung, Viet Nam",
            "id": "here:af:street:vmRfS1.ZPrfiu0c8DOuoLA",
            "resultType": "street",
            "address": {
                "label": "Ngo Trai Ca, Quan Hai Ba Trung, Viet Nam",
                "countryCode": "VNM",
                "countryName": "Viet Nam",
                "county": "Ha Noi",
                "city": "Quan Hai Ba Trung",
                "district": "Phuong Truong Dinh",
                "street": "Ngo Trai Ca"
            },
            "position": {
                "lat": 20.99381,
                "lng": 105.84676
            },
            "distance": 1657,
            "mapView": {
                "west": 105.84524,
                "south": 20.99299,
                "east": 105.84956,
                "north": 20.99494
            }
        }
    ]
}


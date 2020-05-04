import React, {Component, useState} from "react";
import { Provider } from "react-redux";

const store = require("../redux/Redux").default;
const Main = require("./Main").default;


const Module = require("../../../../JavaScript/Redux/Demo_2/App").default;

export default class HomeScreen extends Component{
    render(){
        return (
        <Provider store={store}>
           <Main></Main> 
        </Provider>
        )
    }
}
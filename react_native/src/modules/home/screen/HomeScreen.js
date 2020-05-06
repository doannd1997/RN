import React, {Component, useState} from "react";
import { Provider } from "react-redux";

const Main = require("./Main").default;

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        // this.nav = props.nav.navigation;
    }
    render(){
        return (
           <Main {...this.props}></Main> 
        )
    }
}
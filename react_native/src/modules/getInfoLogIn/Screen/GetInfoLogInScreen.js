import React, {Component, useState} from "react";
import { Provider } from "react-redux";

const Main = require("./Main").default;

export default class LogInScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
           <Main {...this.props}></Main> 
        )
    }
}
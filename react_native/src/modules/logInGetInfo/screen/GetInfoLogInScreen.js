import React, {Component, useState} from "react";

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
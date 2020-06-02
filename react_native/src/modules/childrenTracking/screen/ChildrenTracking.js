import {Provider} from "react-redux";
import { Component } from "react";

const MainComponent = require("./Main").default;
const store = require("../redux/Redux").default;

export default class ChildrenTracking extends Component{
  render(){
    return (
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    )
  }
}
import {createStore} from "redux";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}
const defaultState = {

};


const reducer = (state=defaultState, action)=>{
  switch (action.type){
    default:
      return defaultState;
  }
}

export default createStore(reducer, {});
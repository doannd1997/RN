import {createStore} from "redux";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}
const defaultState = {
  busType: BUS_TYPE.PICK_UP
};


const reducer = (state=defaultState, action)=>{
  switch (action.type){
    case "TOGGLE_PICKING":
      return {...state, busType: action.busType}
  }
    return defaultState;
}

export default createStore(reducer, {});
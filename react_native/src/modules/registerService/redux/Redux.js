import {createStore} from "redux";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

var _curYear = new Date().getFullYear();
const defaultState = {
  yearList: [_curYear, _curYear+1],
  curYear: _curYear
};


const reducer = (state=defaultState, action)=>{
  switch (action.type){
    case "CHANGE_YEAR":
      return {...state, curYear: action.year}
    default:
      return defaultState;
  }
}

export default createStore(reducer, {});
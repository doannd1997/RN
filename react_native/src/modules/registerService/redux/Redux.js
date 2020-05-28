import {createStore} from "redux";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

PICK_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
}

var _curYear = new Date().getFullYear();
const defaultState = {
  yearList: [_curYear, _curYear+1],
  curYear: _curYear,
  pickType: "HOME",
  homeAddress: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
  placeAddress: "Trống",
  homeSetted: false,
  placeSetted: false,
  pickingAddress: false,
};


const reducer = (state=defaultState, action)=>{
  switch (action.type){
    case "CHANGE_YEAR":
      return {...state, curYear: action.year}
    case "TOGGLE_PICK_TYPE":
      return {...state, pickType: (state.pickType == PICK_TYPE.HOME) ? PICK_TYPE.PLACE : PICK_TYPE.HOME};
    case "TOGGLE_PICKING":
      return {...state, pickingAddress: !state.pickingAddress}
    default:
      return defaultState;
  }
}

export default createStore(reducer, {});
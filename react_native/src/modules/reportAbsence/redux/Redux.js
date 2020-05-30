import {createStore} from "redux";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}
const defaultState = {
  busType: BUS_TYPE.PICK_UP,
  isPickingDateStart: false,
  isPickingDateEnd: false,
  startDate: new Date().getTime(),
  endDate: new Date().getTime()
};


const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
        state = defaultState;
  switch (action.type){
    case "TOGGLE_BUS_TYPE":
      return {...state, busType: action.busType};
    case "TOGGLE_PICKING_DATE_START":
      return {...state, isPickingDateStart: !state.isPickingDateStart};
    case "TOGGLE_PICKING_DATE_END":
      return {...state, isPickingDateEnd: !state.isPickingDateEnd};
    case "UPDATE_DATE_START":
      return {...state, startDate: action.startDate};
    case "UPDATE_DATE_END":
      return {...state, endDate: action.endDate};
  }
    return defaultState;
}

export default createStore(reducer, {});
import {createStore} from "redux";

const defaultState = {
  history: [
    {
      title: '25/10/2019',
      data: [{
        time: "10:15:23",
        place: "Khu đô thị Time City",
        action: "UP"
      },
      {
        time: "10:15:23",
        place: "Khu đô thị Time City ",
        action: "DOWN"
      },
      {
        time: "10:15:23",
        place: "Khu đô thị Time City ",
        action: "UP"
      }],
    },
  ],
  isPickingDate: false
};

for (var i=0; i<5; i++){
    var last = defaultState.history[defaultState.history.length-1];
    last.action = (i%2==0)? "DOWN" : "UP"
    defaultState.history.push(last)
}

const reducer = (state=defaultState, action)=>{
  switch (action.type){
    case "TOGGLE_PICKING":
      return {...state, isPickingDate: !state.isPickingDate}
  }
    return defaultState;
}

export default createStore(reducer, {});
import {createStore} from "redux";

var defaultState = {
  guardians: [],
  adding: false,
  editting: false,
  curGuardian: null,
};

for (var i=0; i<15; i++){
    var guardian = {
      id: i,
      name: "Giám Hộ " + (i+1)
    };
    
    defaultState.guardians.push(guardian);
}

const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
        state = defaultState;
  switch (action.type){
    case "OPEN_TO_EDIT":
      return {...state, editting: true};
    case "OPEN_TO_CREATE":
      return {...state, adding: true};
  }
    return state;
}

export default createStore(reducer, {});
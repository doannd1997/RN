import {createStore} from "redux";

var defaultState = {
  guardians: [],
  adding: false,
  editting: false,
  curGuardian: null,
  addAvatarSource: require("../../../../res/image/guardians/police.png"),
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
    case "OPEN_ADD":
      return {...state, adding: true};
    case "SET_ADD_AVATAR":
      return {...state, addAvatarSource: action.addAvatarSource};
    case "CLOSE_POP_UP_ADD":
      return {...state, adding: false}
    case "CLOSE_POP_UP_EDIT":
      return {...state, editting: false}
  }
    return state;
}

export default createStore(reducer, {});
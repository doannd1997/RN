import {createStore} from "redux";
import { getStateFromPath } from "@react-navigation/native";

var defaultState = {
  guardians: [],
  adding: false,
  editting: false,
  curGuardian: null,
  pseudoGuardian: null,
  addAvatarSource: require("../../../../res/image/guardians/police.png"),
  editAvatarSource: require("../../../../res/image/guardians/police.png"),
};

for (var i=0; i<8; i++){
    var guardian = {
      id: i,
      name: "Giám Hộ " + (i+1),
      avatarSource: require("../../../../res/image/guardians/police.png")
    };
    
    defaultState.guardians.push(guardian);
}

const reducer = (state, action) => {
  if (Object.keys(state).length == 0) state = defaultState;
  switch (action.type) {
    case 'OPEN_TO_EDIT':
      return {
        ...state,
        editting: true,
        curGuardian: action.curGuardian,
        pseudoGuardian: action.curGuardian,
        editAvatarSource: action.curGuardian.item.avatarSource,
      };
    case 'OPEN_ADD':
      return {...state, adding: true};
    case 'SET_ADD_AVATAR':
      return {...state, addAvatarSource: action.addAvatarSource};
    case 'SET_EDIT_AVATAR':
      return {
        ...state,
        editAvatarSource: action.editAvatarSource,
        pseudoGuardian: {...state.pseudoGuardian, item: {...state.pseudoGuardian.item, avatarSource: action.editAvatarSource}},
      };
    case 'CLOSE_POP_UP_ADD':
      return {...state, adding: false};
    case 'CLOSE_POP_UP_EDIT':
      return {...state, editting: false};
    case 'DELETE_GUARDIAN':
      return {
        ...state,
        editting: false,
        guardians: state.guardians.filter(
          (guardian, index) => index != action.index,
        ),
      };
    case 'UPDATE_GUARDIAN':
      return {
        ...state,
        editting: false,
        guardians: state.guardians.map((guardian, index) => {
          return index == action.index ? action.guardian : guardian;
        }),
      };
    case "UPDATE_PSEUDO":
      return {
        ...state,
        pseudoGuardian: action.pseudoGuardian
      }
  }
  return state;
};

export default createStore(reducer, {});
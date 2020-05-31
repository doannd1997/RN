import {createStore} from "redux";
import { NativeModules } from "react-native";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

PICK_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
};

const PICK_TYPE_METHOD = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
}

var _curYear = new Date().getFullYear();
var defaultState = {
  isLoading: false,
  yearList: [_curYear, _curYear+1],
  curYear: _curYear,
  pickType: "HOME",                                                         // Radio Button hiển thị chọn nhà hay địa chỉ mới
  homeAddress: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",                    // Địa chỉ nhà hiển thị
  placeAddress: "Trống",                                                    // Địa chỉ mới hiển thị
  homeSetted: false,                                                        // Chọn địa chỉ nhà
  placeSetted: false,                                                       // Chọn địa chỉ mới
  
  pickingAddress: false,                                                    // Khi nhấn vào thay đổi địa chỉ đển khi chọn được đia chỉ                                             // Đang tìm kiếm địa chỉ, thay đổi địa chỉ
  changeType: null,

  placeSelected: null,                                                         // Location mà người dùng nhấn vào nút chọn và bản đồ định hướng lên để hiển thị
  listPlace: [],
  searchResultShown: false,
  region: {
    latitude: 21.005042,
    longitude: 105.843597,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0171,
  },

  pickTypeMethod: PICK_TYPE_METHOD.WITH_PARENT,        // Cách đón trả học sinh {với phụ huynh || học sinh tự lên}
  serviceStartTime: Date.now(),
  isPickingDateStart: false                                                      // Thời gian bắt đầu dịch vụ  
};


const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
    state = defaultState;
  switch (action.type){
    case "CHANGE_YEAR":
      return {...state, curYear: action.year}
    case "TOGGLE_PICK_TYPE":
      return {...state, pickType: (state.pickType == PICK_TYPE.HOME) ? PICK_TYPE.PLACE : PICK_TYPE.HOME};
    case "TOGGLE_PICK_TYPE_METHOD":
      return {...state, pickTypeMethod: (state.pickTypeMethod == PICK_TYPE_METHOD.WITH_PARENT) ? PICK_TYPE_METHOD.ONLY_STUDENT : PICK_TYPE_METHOD.WITH_PARENT};
    case "TOGGLE_PICKING":
      var pickingAddress = !state.pickingAddress;
      return {...state, pickingAddress: pickingAddress, searchResultShown: false, changeType: action.changeType};
    case "TYPING_SEARCH":
      return {...state, searchResultShown: true, placeSelected: null};
    case "DISABLE_SEARCH_RESULT_SHOWN":
      return {...state, searchResultShown: false};
    case "SET_SEARCH_RESULT":
      return {...state, listPlace: action.listPlace};
    case "SELECT_PLACE":
      return {
        ...state,
        placeSelected: action.placeSelected,
        searchResultShown: false,
        region: {
          ...state.region,
          latitude: action.placeSelected.latitude,
          longitude: action.placeSelected.longitude,
        },
        isLoading: false
      };
    case "CHOOSE_PLACE":
      var title = state.placeSelected.title;
      if (state.changeType == CHANGE_TYPE.HOME)
        return {...state, homeAddress: title, pickingAddress: false}
      else
        return {...state, placeAddress: title, pickingAddress: false};
    case "START_LOADING":
      return {...state, isLoading: true};
    case "STOP_LOADING":
      return {...state, isLoading: false};
    case "HIDE_PICKING_SERVICE_DATE_START":
      return {...state, isPickingDateStart: false};
    case "SHOW_PICKING_SERVICE_DATE_START":
      return {...state, isPickingDateStart: true};
      
    case "CHANGE_SERVICE_DATE_START":
      console.log("//// " + action.time)
      return {...state, serviceStartTime: action.time}
    default:
      return state;
  }
}

export default createStore(reducer, {});

var CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
};
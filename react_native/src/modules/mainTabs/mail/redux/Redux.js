import {createStore} from "redux";

var defaultState = {
  inbox: [

  ],
  sentMail: [

  ],
  isReading: false,
  curTab: 0,
  isDisplayPopup: false,
};

for (var i=0; i<15; i++){
    var mail = {
      header: "From VinGroup",
      // content: "Thư báo",
      time: new Date().getTime()
    };
    defaultState.inbox.push({...mail, content: "Thư Đến"});
    defaultState.sentMail.push({...mail, content: "Thư Đi"});
}

const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
        state = defaultState;
  switch (action.type){
    case "SET_TAB":
      return {...state, curTab: action.curTab};
    case "OPEN_SEND_MAIL":
    case "SEND_MAIL":
      return {...state, isDisplayPopup: true};
    case "CLOSE_COMPOSE_MAIL":
      return {...state, isDisplayPopup: false};
    break;
  }
    return state;
}

export default createStore(reducer, {});
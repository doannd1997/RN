import {createStore} from "redux";

var defaultState = {
  inbox: [

  ],
  sentMail: [

  ],
  isReading: false,
  curTab: 0,
  isDisplayPopup: false,
  composeMailContent: "",
  showingMail: false,
  mailIndex: null
};

for (var i=0; i<5; i++){
    var mail = {
      header: "From VinGroup",
      // content: "Thư báo",
      time: new Date().getTime(),
      isNew: true
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
      return {...state, isDisplayPopup: true, composeMailContent: ""};
    case "CLOSE_COMPOSE_MAIL":
      return {...state, isDisplayPopup: false};
    case "SEND_MAIL":
      var mail = action.mail;
      var sentMail = state.sentMail;
      sentMail.unshift(mail);
      return {...state, isDisplayPopup: false, sentMail: sentMail}
    case "TYPE_COMPOSE_MAIL":
      return {...state, composeMailContent: action.composeMailContent}
    case "SHOW_MAIL":
      var _state = {...state, mailIndex: action.index, showingMail: true};
      if (state.curTab == 0)
        _state = {..._state, inbox: state.inbox.map((item, index)=>{
          if (index == action.index)
            return {...item, isNew: false}
          return item;
        })}
      else 
        _state = {..._state, sentMail: state.sentMail.map((item, index)=>{
          if (index == action.index)
            return {...item, isNew: false}
          return item;
        })}
      return _state;
    case "ClOSE_MAIL":
      return {...state, showingMail: false, mailIndex: null}
    case "DELETE_MAIL":
      var _state = {...state, showingMail: false};
      if (state.curTab == 0)
        _state = {..._state, inbox: state.inbox.filter((item, index)=>(index!=state.mailIndex))}
      else 
      _state = {..._state, sentMail: state.sentMail.filter((item, index)=>(index!=state.mailIndex))}
      _state.mailIndex = null;
      return _state;
  }
    return state;
}

export default createStore(reducer, {});
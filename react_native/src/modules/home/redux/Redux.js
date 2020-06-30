const {createStore} = require("redux");

const defaultRegion = {
    latitude: 21.005042,
    longitude: 105.843597,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0171,
}
const defaultState = {
    logedIn: global.userData.logedIn,
    CHILDREN_TRACKING_showingDivInfo: false,
    region: {
        ...defaultRegion
        },
    _region: {
        ...defaultRegion
        },
    mapType: "standard",
    curTab: 0,  // account Tab
    childWatchMode: 0, // 0 == guardians ; 1 == all Info
    parentAvatar: require("../../../../res/image/Account/man.png"),
    parentName: "[ Tên Phụ Huynh ]",
    childList: [
        {
            id: 0,
            displayName: "Học Sinh A",
            avatar: require("../../../../res/image/HomeScreen/education.png")
        },
        {
            id: 1,
            displayName: "Học Sinh B",
            avatar: require("../../../../res/image/HomeScreen/education.png")
        }
    ],
    curChild: 0,
    history: [
        {
          date: new Date().getTime(),
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
    isPickingDate: false,
    guardians: [],

    // mail-tab
    mail_inbox: [

    ],
    mail_sentMail: [
  
    ],
    mail_isReading: false,
    mail_curTab: 0,
    mail_isDisplayPopUp: false,
    mail_composeContent: "",
    mail_showing: false,
    mail_mailIndex: null,
    mail_curMonitor: 0,
}

const ONE_DAY = 1000*60*60*24;

for (var i=0; i<12; i++){
    var last = defaultState.history[defaultState.history.length-1];
    last = {...last};
    last.action = (i%2==0)? "DOWN" : "UP";
    last.date -= ONE_DAY;
    defaultState.history.push(last)
}

for (var i=0; i<5; i++){
    var mail = {
      header: "From VinGroup",
      // content: "Thư báo",
      time: new Date().getTime(),
      isNew: true
    };
    defaultState.mail_inbox.push({...mail, content: "Thư Đến"});
    defaultState.mail_sentMail.push({...mail, content: "Thư Đi", isNew: false});
}

const createDefaultGuardian = (i)=>{
    return {
        id: i,
        name: "Giám Hộ " + (i+1),
        phoneNumber: Math.floor(Math.random()*10000000),
        avatarSource: require("../../../../res/image/guardians/police.png"),
        role: "Mẹ",
        assigned: Array.from(Array(defaultState.childList.length), () => 0)
    };
}

for (var i=0; i<3; i++){
    var guardian = createDefaultGuardian(i)
    
    defaultState.guardians.push(guardian);
}


const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState;
    switch (action.type){
        case "LOG_IN":
            global.userData.setLogedIn(true);
            return {...state, logedIn: true, parentName: action.parentName, parentAvatar: action.parentAvatar};
        case "LOG_OUT":
            global.userData.setLogedIn(false);
            return {...state, logedIn: false};
        case "TOGGLE_LOG_IN":
            global.userData.setLogedIn(!global.userData.logedIn);
            return {...state, logedIn: !state.logedIn}
        case "CHILDREN_TRACKING_showingDivInfo__SHOW":
            return {...state, CHILDREN_TRACKING_showingDivInfo: true}
        case "CHILDREN_TRACKING_showingDivInfo__HIDE":
            return {...state, CHILDREN_TRACKING_showingDivInfo: false}
        case "MAP_VIEW_UPDATE_REGION":
            return {...state, _region: action.region };
        case "MAP_VIEW_RESET_REGION":
            return {...state, region: {...state._region}};
        case "SWITCH_MAP_TYPE":
            return {...state, mapType: (state.mapType == "standard") ? "satellite" : "standard"}
        case "SET_TAB":
            return {...state, curTab: action.curTab};
        case "SET_PARENT_AVATAR":
            return {...state, parentAvatar: action.avatar}
        case "SET_STUDENT_AVATAR":
            var childList = state.childList.map((item, index)=>{
                if (index != state.curChild)
                    return item;
                return {...item, avatar: action.avatar}
            })
            return {...state, childList: childList}
        case "SELECT_CHILD": 
            return {...state, curChild: action.curChild}
        case "TOGGLE_PICKING":
            return {...state, isPickingDate: !state.isPickingDate}
        case "TOGGLE_ENABLE_GUARDIAN_ACC_INFO":
            var _guardians = state.guardians.map((guardian, index)=>{
                if (guardian.id != action.guardianId)
                    return guardian;
                var _assigned = guardian.assigned.map((item)=>item);
                _assigned[state.curChild] = (_assigned[state.curChild] + 1)%2;
                return {...guardian, assigned: _assigned}
            });
            return {...state, guardians: _guardians}
        case "SWITCH_CHILD_TAB_MODE":
            return {...state, childWatchMode: action.childWatchMode};

        // mail
        case "MAIL_SET_TAB":
            return {...state, mail_curTab: action.mail_curTab};
          case "MAIL_OPEN_SEND_MAIL":
            return {...state, mail_isDisplayPopUp: true, mail_composeContent: ""};
          case "MAIL_CLOSE_COMPOSE_MAIL":
            return {...state, mail_isDisplayPopUp: false};
          case "MAIL_SEND_MAIL":
            var mail = action.mail;
            var sentMail = state.mail_sentMail;
            sentMail.unshift(mail);
            return {...state, mail_isDisplayPopUp: false, mail_sentMail: sentMail}
          case "MAIL_TYPE_COMPOSE_MAIL":
            return {...state, mail_composeContent: action.mail_composeContent}
          case "MAIL_SHOW_MAIL":
            var _state = {...state, mail_mailIndex: action.mail_mailIndex, mail_showing: true};
            if (state.mail_curTab == 0)
              _state = {..._state, mail_inbox: state.mail_inbox.map((item, index)=>{
                if (index == action.mail_mailIndex)
                  return {...item, isNew: false}
                return item;
              })}
            else 
              _state = {..._state, mail_sentMail: state.mail_sentMail.map((item, index)=>{
                if (index == action.mail_mailIndex)
                  return {...item, isNew: false}
                return item;
              })}
            return _state;
          case "MAIL_ClOSE_MAIL":
            return {...state, mail_showing: false, mail_mailIndex: null}
          case "MAIL_DELETE_MAIL":
            var _state = {...state, mail_showing: false};
            if (state.mail_curTab == 0)
              _state = {..._state, mail_inbox: state.mail_inbox.filter((item, index)=>(index!=state.mail_mailIndex))}
            else 
            _state = {..._state, mail_sentMail: state.mail_sentMail.filter((item, index)=>(index!=state.mail_mailIndex))}
            _state.mail_mailIndex = null;
            return _state;
          case "MAIL_CHANGE_MONITOR":
            return {...state, mail_curMonitor: action.mail_curMonitor}
    }
    
    return state;
}

const store = createStore(reducer, {});

export default store;
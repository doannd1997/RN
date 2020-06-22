const {createStore} = require("redux");

const defaultRegion = {
    latitude: 21.005042,
    longitude: 105.843597,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0171,
}
const defaultState = {
    logedIn: global.userData.logedIn,
    displayName: "Nguyễn Duy Đoàn",
    CHILDREN_TRACKING_showingDivInfo: false,
    region: {
        ...defaultRegion
        },
    _region: {
        ...defaultRegion
        },
    mapType: "standard",
    curTab: 0,  // account Tab
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
    guardians: []
}

const ONE_DAY = 1000*60*60*24;

for (var i=0; i<12; i++){
    var last = defaultState.history[defaultState.history.length-1];
    last = {...last};
    last.action = (i%2==0)? "DOWN" : "UP";
    last.date -= ONE_DAY;
    defaultState.history.push(last)
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
            return {...state, logedIn: true};
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
    }
    
    return state;
}

const store = createStore(reducer, {});

export default store;
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
    curTab: 0,
    parentAvatar: require("../../../../res/image/Account/man.png"),
    parentName: "[ Tên Phụ Huynh ]",
    studentAvatar: require("../../../../res/image/HomeScreen/education.png"),
    studentName: "[ Tên Học Sinh ]"
}

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState;
    console.log(">>");
    console.log(state);
    console.log(action);
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
            return {...state, studentAvatar: action.avatar}
    }
    
    return state;
}

const store = createStore(reducer, {});

export default store;
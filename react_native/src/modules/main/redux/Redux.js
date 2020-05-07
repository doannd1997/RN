const {createStore} = require("redux");

const getDefaultState= ()=>{
    var defaultState = {
        logedIn: global.userData.logedIn,
        displayName: "Nguyễn Duy Đoàn",
        CHILDREN_TRACKING_showingDivInfo: false,
        region: {
            latitude: 21.005042,
            longitude: 105.843597,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
    }
    return defaultState;
}

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return getDefaultState();
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
            return {...state, region: action.region}
        case "MAP_VIEW_RESET_REGION":
            return {...state, region: getDefaultState().region}
    }

    return state;
}

const store = createStore(reducer, {});

export default store;
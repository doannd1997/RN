const {createStore} = require("redux");

const getDefaultState= ()=>{
    var defaultState = {
        logedIn: global.userData.logedIn,
        displayName: "Nguyễn Duy Đoàn"
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
    }

    return state;
}

const store = createStore(reducer, {});

export default store;
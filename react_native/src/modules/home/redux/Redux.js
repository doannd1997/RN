const {createStore} = require("redux");

const defaultState = {
    logedIn: false,
    displayName: "Nguyễn Duy Đoàn"
}

const reducer = (state, action)=>{
    if (state == undefined)
        return defaultState;
    switch (action.type){
        case "LOG_IN":
            return {...state, logedIn: true};
        case "LOG_OUT":
            return {...state, logedIn: false};
    }

    return defaultState;
}

const store = createStore(reducer, {});

export default store;
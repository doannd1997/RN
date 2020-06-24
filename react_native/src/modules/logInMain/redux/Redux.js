import {createStore}  from "redux";

var defaultState = {
    phoneNumber: "",
    password: "",
};

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState;
    switch (action.type){
        case StoreDefine.TYPE_PHONE_NUMBER:
            return {...state, phoneNumber: action.phoneNumber};
        case StoreDefine.TYPE_PASSWORD:
            return {...state, password: action.password};
    }
    return state;
};

export default createStore(reducer, {});

const StoreDefine = {
    TYPE_PHONE_NUMBER: "TYPE_PHONE_NUMBER",
    TYPE_PASSWORD: "TYPE_PASSWORD",
};

exports.StoreDefine = StoreDefine;
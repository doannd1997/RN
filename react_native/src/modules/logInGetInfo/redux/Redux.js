import {createStore}  from "redux";

var defaultState = {
    phoneNumber: "",
    email: "",
    studentId: ""
};

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState;
    switch (action.type){
        case StoreDefine.TYPE_PHONE_NUMBER:
            return {...state, phoneNumber: action.phoneNumber};
        case StoreDefine.TYPE_EMAIL:
            return {...state, email: action.email};
        case StoreDefine.TYPE_STUDENT_ID:
            return {...state, studentId: action.studentId};
    }
    return state;
};

export default createStore(reducer, {});

const StoreDefine = {
    TYPE_PHONE_NUMBER: "TYPE_PHONE_NUMBER",
    TYPE_EMAIL: "TYPE_EMAIL",
    TYPE_STUDENT_ID: "TYPE_STUDENT_ID"
};

exports.StoreDefine = StoreDefine;
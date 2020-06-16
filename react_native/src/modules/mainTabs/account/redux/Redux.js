import {createStore} from "redux";

const defaultState = {
    curTab: 0,
    parentAvatar: require("../../../../../res/image/Account/man.png"),
    parentName: "[ Tên Phụ Huynh ]",
    studentAvatar: require("../../../../../res/image/HomeScreen/education.png"),
    studentName: "[ Tên Học Sinh ]"
}

const reducer = (state, action)=>{
    if (Object.keys(state) == 0)
        return defaultState;
    switch (action.type){
        case "SET_TAB":
            return {...state, curTab: action.curTab};
        case "SET_PARENT_AVATAR":
            return {...state, parentAvatar: action.avatar}
        case "SET_STUDENT_AVATAR":
            return {...state, studentAvatar: action.avatar}
    }
    return state;
}

export default createStore(reducer, {});


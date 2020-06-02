import asyncStore from "../storage/asyncStore";
import { NativeModules, Platform } from "react-native"

const asynStorage = require("../storage/asyncStore").default;

 userData = {
    logedIn: false,
    userName: "null",
    displayName: "Developer",
    passWord: "123456",
    GOOGLE_API_KEY: "AIzaSyCcuUK8Q8drVszgClwhfIVMXImXazFVaGE",
    HERE_API_KEY: "91DuZMDSNvUjpx-CV1Qb9qp6H2FK8yPIePkG98fjUL4",
    loadAllData: async ()=>{
        this.curLang = await asynStorage.getData(userData.KEY_LANG);
        if (typeof this.curLang == 'undefined'){
            await asynStorage.storeData(userData.KEY_LANG, userData.DEFAULT_LANG);
            this.curLang = userData.DEFAULT_LANG;
        }
        
        this.accessToken = await asyncStore.getData(userData.KEY_ACCESS_TOKEN);
        this.userName = await asyncStore.getData(userData.KEY_USER_NAME);
        this.passWord = await asyncStore.getData(userData.KEY_PASS_WORD);
    },
    getCurLang: ()=>{
        return this.curLang || userData.DEFAULT_LANG;
    },

    isLogedIn: ()=>{
        return this.logedIn;
    },
    setLogedIn: (boo)=>{
        this.logedIn = boo;
    },
    getAccessToken: ()=>{
        return this.accessToken;
    },
    getUserName: ()=>{
        return this.userName;
    },
    getPassWord: ()=>{
        return this.passWord;
    },

    setCurLang: async (lang)=>{
        this.curLang = lang;
        asynStorage.storeData(userData.KEY_LANG, lang);
    },

    getChildName: ()=>{
        return "Kids";
    },
     
    isChildOnBus: ()=>{
        return false;
    },

    getBusCoordinate: (busIndex)=>{
        var listCoor = [
            {
                latitude:20.996669, 
                longitude: 105.842007
            },
            {
                latitude:20.997129, 
                longitude: 105.845494
            },
            {
                latitude:20.998341, 
                longitude: 105.839003
            },
        ]
        return listCoor[busIndex]
    }
}


// userData.DEFAULT_LANG =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
//     : NativeModules.I18nManager.localeIdentifier;

// console.log("language: " + userData.DEFAULT_LANG);

userData.DEFAULT_LANG = "vi";

userData.KEY_LANG = "KEY_LANG";
userData.KEY_ACCESS_TOKEN = "KEY_ACCESS_TOKEN";
userData.KEY_USER_NAME = "KEY_USER_NAME";
userData.KEY_PASS_WORD = "PASS_WORD";

export default userData;
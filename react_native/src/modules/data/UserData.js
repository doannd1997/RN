import asyncStore from "../../storage/asyncStore";
import { createIconSetFromFontello } from "react-native-vector-icons";

const asynStorage = require("../../storage/asyncStore").default;

userData = {
    loadAllData: async ()=>{
        var curLang = await asynStorage.getData(userData.KEY_LANG);
        if (typeof curLang == 'undefined')
            curLang = userData.DEFAULT_LANG;
        this.curLang = curLang;
        await asynStorage.storeData(userData.KEY_LANG, this.curLang);
        this.accessToken = await asyncStore.getData(userData.KEY_ACCESS_TOKEN);
        this.userName = await asyncStore.getData(userData.KEY_USER_NAME);
        this.passWord = await asyncStore.getData(userData.KEY_PASS_WORD);
    },
    getCurLang: ()=>{
        return this.curLang || userData.DEFAULT_LANG;
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
    }
}

userData.DEFAULT_LANG = "vi";

userData.KEY_LANG = "KEY_LANG";
userData.KEY_ACCESS_TOKEN = "KEY_ACCESS_TOKEN";
userData.KEY_USER_NAME = "KEY_USER_NAME";
userData.KEY_PASS_WORD = "PASS_WORD";

export default userData;
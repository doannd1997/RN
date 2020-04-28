import asyncStore from "../../storage/asyncStore";

const asynStorage = require("../../storage/asyncStore").default;

export default userData = {
    loadAllData: async ()=>{
        this.curLang = await asynStorage.getData(userData.KEY_LANG);
        this.accessToken = await asyncStore.getData(userData.KEY_ACCESS_TOKEN);
        this.userName = await asyncStore.getData(userData.KEY_USER_NAME);
        this.passWord = await asyncStore.getData(userData.KEY_PASS_WORD);
    }
}

userData.DEFAULT_LANG = "vi";
userData.KEY_LANG = "KEY_LANG";
userData.KEY_ACCESS_TOKEN = "KEY_ACCESS_TOKEN";
userData.KEY_USER_NAME = "KEY_USER_NAME";
userData.KEY_PASS_WORD = "PASS_WORD";
import { call } from "react-native-reanimated";

const userData = require("../data/UserData").default;
const localize = require("../../localization/localize").default;

const DELAY = 0;

export default initial = {
    initAll: async (callback)=>{
        global.userData = userData;
        await userData.loadAllData();
        global.localization = localize;
        await global.localization.initConfigLang();
        if (typeof callback == "function")
            setTimeout(callback, DELAY)
    }
}


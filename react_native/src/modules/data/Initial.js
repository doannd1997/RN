const userData = require("../data/UserData").default;
const localize = require("../../localization/localize").default;

export default initial = {
    initAll: async ()=>{
        global.userData = userData;
        await userData.loadAllData();
        global.localization = localize;
        await global.localization.initConfigLang();
    }
}


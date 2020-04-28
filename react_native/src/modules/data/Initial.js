const userData = require("../data/UserData").default;
const localization = require("../../localization/localize").default;

export default initial = {
    initAll: async ()=>{
        global.userData = userData;
        await userData.loadAllData();
    }
}


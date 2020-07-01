import { call } from "react-native-reanimated";

const userData = require("./UserData").default;
const localize = require("../localization/localize").default;
const fcmClient = require("../firebase/Firebase").default;
const authenData = require("../data/AuthenData").default;

const AccountData = require("./Account").default;
const RouteData = require("./Route").default;
const RegisterData = require("./RegisterData").default

const Cacher = require("./Cacher");

const DELAY = 100; //ms loading -> main screen

export default initial = {
    initAll: async function(callback){
        global.userData = userData;
        await userData.loadAllData();
        global.localization = localize;
        await global.localization.initConfigLang();
        global.authenData = authenData;
        await authenData.initial();
        
        global.cacher = Cacher
        global.accountData = AccountData
        global.routeData = RouteData
        global.registerData = RegisterData

        if (typeof callback == "function")
            setTimeout(callback, DELAY)

        fcmClient.start();
    }
}


import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    apiLogIn: (props, resultCallback)=>{
        var url = createUrl(ROUTE.LOG_IN)

        const userName = props.phoneNumber;
        const password = props.password;
        var params = PARAM.LOG_IN.replace(/@user_name@/gi, userName).replace(/@pass_word@/gi, password);

        networkRequestPost(url, params, null, async (responseText, responseHeader)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            var json = JSON.parse(responseText)
            global.accountData.setAccount(json)
            global.routeData.setRoute(json.lstRoutes)

            global.authenData.setToken(getAccessToken(responseHeader))

            props.navigation.navigate("HomeScreen", {logedIn: true})
            await global.authenData.setPhoneNumber(props.phoneNumber)
            await global.authenData.setPassword(props.password)
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_LOGIN_FAIL"));
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentAppLogin"
}

const PARAM = {
    LOG_IN: "username=@user_name@&password=@pass_word@",
    ACCESS_TOKEN: "Access_Token: "
}

const getAccessToken = (responseHeader)=>{
    var aIdx = responseHeader.search(PARAM.ACCESS_TOKEN);
    var tokenIdx = aIdx + PARAM.ACCESS_TOKEN.length;
    var token = responseHeader.slice(tokenIdx).split('\n')[0]

    return token;
}
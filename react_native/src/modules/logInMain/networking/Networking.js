import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    apiLogIn: (props, resultCallback)=>{
        var url = createUrl(ROUTE.LOG_IN)

        const userName = "0388273219";
        const password = "123456";
        var params = PARAM.LOG_IN.replace(/@user_name@/gi, userName).replace(/@pass_word@/gi, password);

        networkRequestPost(url, params, async (responseText)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            props.navigation.navigate("HomeScreen", {logedIn: true});
            await global.authenData.setPhoneNumber(props.phoneNumber);
            await global.authenData.setPassword(props.password);
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentAppLogin"
}

const PARAM = {
    LOG_IN: "username=@user_name@&password=@pass_word@"
}
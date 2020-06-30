import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    apiRequestInfo: (props, resultCallback)=>{
        var url = createUrl(ROUTE.LOG_IN)

        var email = props.email;
        var phoneNumber = props.phoneNumber;
        var studentId = props.phoneNumber;

        var params = PARAM.LOG_IN.replace(/@phone_number@/gi, phoneNumber).replace(/@email@/gi, email).replace(/@studentId@/, studentId);

        networkRequestPost(url, params, async (responseText)=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            props.navigation.navigate("MainLogin");
        }, async ()=>{
            if (typeof resultCallback == 'function')
                resultCallback();
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentGetLogInInfo"
}

const PARAM = {
    LOG_IN: "phoneNumber=@phone_number@&email=@email@&studentId=@studentId@"
}
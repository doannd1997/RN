import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork"
import {QuickToast} from "../../../utils/Toast";

export default Networking = {
    aipGetRegisterInfo: (data, sucessCallback, failCallback)=>{
        var url = createUrl(ROUTE.UPDATE_TRACKING)

        var parentId = global.accountData.getId()
        var params = PARAM.UPDATE_TRACKING.replace(/@parentId@/gi, parentId)
        const token = global.authenData.getToken()
        networkRequestPost(url, params, token, async (responseText, responseHeader)=>{
            var json = JSON.parse(responseText)
            if (typeof sucessCallback == 'function')
                sucessCallback(json);
        }, async ()=>{
            if (typeof failCallback == 'function')
                failCallback(json);
            QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
        })
    },
};

const ROUTE = {
    UPDATE_TRACKING: "api/values/GetRegister4CurrentYear"
}

const PARAM = {
    UPDATE_TRACKING: "parentId=@parentId@"
}
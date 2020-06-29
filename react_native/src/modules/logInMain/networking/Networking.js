import {networkRequestGet, networkRequestPost, createUrl} from "../../network/NetWork";

export default Networking = {
    apiLogIn: (props)=>{
        var url = createUrl(ROUTE.LOG_IN)

        const userName = "0388273219";
        const password = "123456";
        var params = PARAM.LOG_IN.replace(/@user_name@/gi, userName).replace(/@pass_word@/gi, password);

        networkRequestPost(url, params,async ()=>{
            props.navigation.navigate("HomeScreen", {logedIn: true});
            await global.authenData.setPhoneNumber(props.phoneNumber);
            await global.authenData.setPassword(props.password);
        })
    }
};

const ROUTE = {
    LOG_IN: "api/values/ParentAppLogin"
}

const PARAM = {
    LOG_IN: "username=@user_name@&password=@pass_word@"
}
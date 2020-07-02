const netConf = require("../../../res/Network/Network.json");
import {QuickToast} from "../../utils/Toast";

exports.networkRequestGet = (url, successCallback, failCalllback)=>{
    var http = new XMLHttpRequest();
    http.open("GET", url, true);

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            successCallback(http.readyState);
        }
        else 
            failCalllback();
    }
    http.send();
}

exports.networkRequestPost = (url, params, token, successCallback, failCalllback)=>{
    var http = new XMLHttpRequest();
    http.open("POST", url, true);
    // http.setRequestHeader("Content-type", "application/json; charset=utf-8");
    http.setRequestHeader("Content-type", netConf.CONTENT_TYPE);
    // http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    if (token != undefined){
        http.setRequestHeader("Authorization", "Bearer " + token)
    }

    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            switch (http.status){
                case 200:
                    if (typeof successCallback == 'function'){
                        successCallback(http.responseText, http.getAllResponseHeaders());
                    }
                    break
                case 408:
                case 204:
                    if (typeof failCalllback == 'function'){
                        failCalllback();
                    }
                    else {
                        QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
                    }
                    break
                case 500:
                    console.log(http.responseText)
                    break
            }
        }
    }
    http.send(params);
}

exports.createUrl = (field, options)=>{
    var url = netConf.protocol + "://" + netConf.ip + ":" + netConf.port + "/" + field;
    if (typeof options == 'object' && Object.keys(options).length > 0){
        var extras = []
        for (var o in options){
            var data = options[o]
            var p = o + "=" + data.toString().replace(/ /gi, "%20@")
            extras.push(p)
        }
        extras = "?" + extras.join("&")
        url += extras
    }
    return url;
}

exports.getAvatarUri = (field)=>{
    return {
        uri: netConf.BASE_URL + field
    }
}

exports.getAgreementUri = (field)=>{
    return netConf.BASE_URL + field
}
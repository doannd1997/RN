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

exports.networkRequestPost = (url, params, successCallback, failCalllback)=>{
    console.log(">> request params");
    console.log(params)

    var http = new XMLHttpRequest();
    http.open("POST", url, true);

    // http.setRequestHeader("Content-type", "application/json; charset=utf-8");
    http.setRequestHeader("Content-type", netConf.CONTENT_TYPE);
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            switch (http.status){
                case 204:
                case 200:
                    if (typeof successCallback == 'function'){
                        successCallback(http.responseText);
                    }
                    break
                case 408:
                    if (typeof failCalllback == 'function'){
                        failCalllback();
                    }
                    else {
                        QuickToast.show(global.localization.getLang("REQUEST_CODE_FAIL"));
                    }
                    break
            }
        }
    }
    http.send(params);
}

exports.createUrl = (field)=>{
    var url = netConf.protocol + "://" + netConf.ip + ":" + netConf.port + "/" + field;
    console.log(">> url " + url);
    return url;
}
const netConf = require("../../../res/Network/Network.json");

exports.networkRequestGet = (url, successCallback)=>{
    var http = new XMLHttpRequest();
    http.open("GET", url, true);

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            successCallback(http.readyState);
        }
    }
    http.send();
}

exports.networkRequestPost = (url, params, successCallback)=>{
    var http = new XMLHttpRequest();
    http.open("POST", url, true);

    // http.setRequestHeader("Content-type", "application/json; charset=utf-8");
    http.setRequestHeader("Content-type", netConf.CONTENT_TYPE);
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {
        if (http.readyState == 4){
            if (typeof successCallback == 'function'){
                successCallback();
            }
        }
        // if(http.readyState == 4 && http.status == 200) {
        //     successCallback(http.readyState);
        // }
    }
    http.send(params);
}

exports.createUrl = (field)=>{
    var url = netConf.protocol + "://" + netConf.ip + ":" + netConf.port + "/" + field;
    console.log(">> url " + url);
    return url;
}
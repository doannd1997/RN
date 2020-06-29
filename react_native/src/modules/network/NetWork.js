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

    http.setRequestHeader("Content-type", "application/json; charset=utf-8");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            successCallback(http.readyState);
        }
    }
    http.send(params);
}
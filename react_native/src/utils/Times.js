var getDateComponent = (timeStamp)=>{
    var date = new Date(timeStamp);
    var dd = date.getDate();
    if (dd<10)  
        dd = "0" + dd;
    var mm = date.getMonth()+1;
    if (mm<10)
        mm = "0" + mm;
    var yy = date.getFullYear();

    return {d: dd, m: mm, y: yy};
}

export default Times = {
    formatDate: (timeStamp, formatType)=>{
        var dateCom = getDateComponent(timeStamp);
        switch (formatType){
            case Times.FORMAT_TYPE.dd_mm_yyyy:
                return dateCom.d + "/" + dateCom.m + "/" + dateCom.y;
            default:
                return dateCom.d + "/" + dateCom.m + "/" + dateCom.y;
        }
    },
    
}

Times.FORMAT_TYPE = {
    dd_mm_yyyy: "DD/MM/YYYY"
}
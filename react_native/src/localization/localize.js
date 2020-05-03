const conf = require("./config.json");

const en = require("../../res/localize/current/en.json");
const vi = require("../../res/localize/current/vi.json");

export default localization = {
    curLang: null,
    getLang: (lang_id)=>{
        console.log("get lang " + lang_id + " cur lang " + this.curLang + ":: " + vi[lang_id]) ;
        switch (this.curLang){
            case "vi":
                return vi[lang_id];
                break;
            case "en":
                return en[lang_id]
                break;
        };
    },
    initConfigLang: ()=>{
        this.curLang = global.userData.getCurLang();
    }
}
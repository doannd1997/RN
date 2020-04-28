const conf = require("./config.json");
resLang = {
    en: require("../../res/localize/current/en.json"),
    vi: require("../../res/localize/current/vi.json")
}

export default localization = {
    DEFAULT_LANG: "vi",
    curLang: null,
    poolLang: {},
    getLang: function(lang_id){
        if (Object.keys(this.poolLang).length == 0){
            this.initLang();
        };

        var localize = this.poolLang[this.curLang][lang_id];
        return localize || lang_id;
    },
    initLang: function(){
        this.poolLang = resLang;
        this.curLang = "vi";
    }
}
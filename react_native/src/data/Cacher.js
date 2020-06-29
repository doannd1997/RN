// use to save temporary data
// eg: save place search result

var places = {};
var Cacher = {
    getTempPlace: (place, hitCallback, missCallback)=>{
        console.log(places)
        if (Object.keys(places).indexOf(place) != -1){
            console.log(">> hit: [" + place + "]")
            if (typeof hitCallback == 'function')
                hitCallback(places[place])
        }
        else {
            console.log(">> miss: [" + place + "]")
            if (typeof missCallback == 'function')
                missCallback()
        }
    },
    storeTempPlace: (place, result)=>{
        places[place] = result;
    },
}

module.exports = Cacher;
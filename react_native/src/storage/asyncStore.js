import {AsyncStorage} from "react-native";


export default asyncStore = {
    storeData: async function(paramKey, paramData, successCallback, failCallback){
        let key = paramKey;
        let data = paramData;
        try {
            await AsyncStorage.setItem(key, data);
            if (typeof successCallback == 'funciton')
                successCallback();
            console.log("store data success: " + key + " : " + data);
            return true;
        }
        catch (e){
            console.log("set data to storage failed: " + key + " -> " + value);
            if (typeof failCallback == 'function')
                failCallback();
            return false;
        }
        
        
    },

    getData: async function(key, successCallback, failCallback){
        try {
            let value = await AsyncStorage.getItem(key);
            if (value != null){
                if (typeof successCallback == 'function')
                    successCallback(value);
                console.log("get data success: " + key + " : " + value)
                return value;
            }
        }
        catch (e){
            if (typeof failCallback == 'function')
                failCallback(e);
        }
    }
}
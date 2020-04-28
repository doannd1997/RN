import AsyncStorage from "react-native";


export default asyncStore = {
    async storeData: function(data, successCallback, failCallback){
        let key = data.key;
        let data = data.data;
        try {
            await AsyncStorage.setItem(key, data);
            if (typeof successCallback == 'funciton')
                successCallback();
        }
        catch (e){
            console.error("set data to storage failed: " + key + " -> " + value);
            if (typeof failCallback == 'function')
                failCallback();
        }
        
        
    },

    async getData: function(key, successCallback, failCallback){
        try {
            let value = await AsyncStorage.getItem(key);
            if (value != null){
                if (typeof successCallback == 'function')
                    successCallback(value);
                return value;
            }
        }
        catch (e){
            console.error("get data from storage failed: " + key);
            if (typeof failCallback == 'function')
                failCallback(e);
        }
    }
}
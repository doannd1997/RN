import asyncStore, {StorageKey} from "../storage/asyncStore";

var AuthenData = {
    phoneNumber: "",
    setPhoneNumber: async (phoneNumber, callback)=>{
        this.phoneNumber = phoneNumber;
        await asyncStore.storeData(StorageKey.PHONE_NUMBER, phoneNumber.toString());
        if (typeof callback == 'function')
            callback();
    },
    getPhoneNumber: ()=>{
        return this.phoneNumber;
    },
    initial: async ()=>{
        var phoneNumber = await asyncStore.getData(StorageKey.PHONE_NUMBER);
        console.log(">> " + phoneNumber)
        this.phoneNumber = phoneNumber ? phoneNumber : ""
    }
}

export default AuthenData;
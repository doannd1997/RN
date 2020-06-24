import { notifications } from "react-native-firebase-push-notifications"
import asyncStore from "../storage/asyncStore";

const asyncStorage = require("../storage/asyncStore").default;

getToken = async () => {
//get the messeging token
const token = await notifications.getToken()
//you can also call messages.getToken() (does the same thing)
return token
}
getInitialNotification = async () => {
//get the initial token (triggered when app opens from a closed state)
const notification = await notifications.getInitialNotification()
console.log("getInitialNotification", notification)
return notification
}

onNotificationOpenedListener = () => {
//remember to remove the listener on un mount
//this gets triggered when the application is in the background
this.removeOnNotificationOpened = notifications.onNotificationOpened(
    notification => {
    console.log("onNotificationOpened", notification)
    //do something with the notification
    }
)
}

onNotificationListener = () => {
//remember to remove the listener on un mount
//this gets triggered when the application is in the forground/runnning
//for android make sure you manifest is setup - else this wont work
//Android will not have any info set on the notification properties (title, subtitle, etc..), but _data will still contain information
this.removeOnNotification = notifications.onNotification(notification => {
    //do something with the notification
    console.log("onNotification", notification)
})
}

onTokenRefreshListener = () => {
//remember to remove the listener on un mount
//this gets triggered when a new token is generated for the user
this.removeonTokenRefresh = notifications.onTokenRefresh(token => {
    //do something with the new token
})
}
setBadge = async number => {
//only works on iOS for now
return await notifications.setBadge(number)
}

getBadge = async () => {
//only works on iOS for now
return await notifications.getBadge()
}

hasPermission = async () => {
//only works on iOS
return await notifications.hasPermission()
//or     return await messages.hasPermission()
}

requestPermission = async () => {
//only works on iOS
return await notifications.requestPermission()
//or     return await messages.requestPermission()
}

    // componentWillUnmount() {
    //remove the listener on unmount
    // if (this.removeOnNotificationOpened) {
    //   this.removeOnNotificationOpened()
    // }
    // if (this.removeOnNotification) {
    //   this.removeOnNotification()
    // }
 
    // if (this.removeonTokenRefresh) {
    //   this.removeonTokenRefresh()
    // }
//   }

const sendToken = async(token)=>{
    console.log("firebase cloud message token")
    console.log(token)
}

export default fcmClient = {
    start: async()=>{
        var token = await asyncStore.getData(FCM_TOKEN_KEY_STORE);
        if (token == null){
            token = await getToken();
            sendToken(token);
        }
        else {
            notifications.onTokenRefresh(token => {
                sendToken(token)
            })
        }
    }
}

const FCM_TOKEN_KEY_STORE = "FCM_TOKEN_KEY_STORE"
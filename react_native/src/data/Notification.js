const  PushNotification = require("react-native-push-notification")

export default NotificationData = {
    pushNotiMail: (num)=>{
        var header = global.localization.getLang("lang_system_noti_header")
        var msg = global.localization.getLang("noti_new_mail").replace(/@num@/gi, num)
        PushNotification.localNotification({
            title: header, // (optional)
            message: msg, // (required)
        })
    }
}
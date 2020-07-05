const  PushNotification = require("react-native-push-notification")

export default NotificationData = {
    pushNoti: ()=>{
        PushNotification.localNotification({
            title: "Thông báo hệ thống", // (optional)
            message: "Bạn vừa có Thư mới hoặc hoạt động mới", // (required)
        })
    }
}
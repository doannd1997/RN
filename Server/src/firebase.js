
var admin = require("firebase-admin");

var serviceAccount = require("../public/appparent-firebase-adminsdk-cugj6-027f9922db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appparent.firebaseio.com"
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'fP8TsROoSOu1MpxKXfAPaM:APA91bElq4PvxueYjHFCQU4qasuCJ2eXh-NlvJi6r-K2yuSlIM-JN_kpVzh2jWJkia5g0NJkPUquLhmyxtkYMfWM9nVNBDKTC4Nf0ogMarCfBqN7M1CvM6hUEb2YWTarpsTm_IcwuA81';
// var registrationToken = 'fPROoSOu1MpxKXfAPaM:APA91bElq4PvxueYjHFCQU4qasuCJ2eXh-NlvJi6r-K2yuSlIM-JN_kpVzh2jWJkia5g0NJkPUquLhmyxtkYMfWM9nVNBDKTC4Nf0ogMarCfBqN7M1CvM6hUEb2YWTarpsTm_IcwuA81';

var message = {
    notification: {
        title: 'Bạn có thư mới #1',
        body: 'Xin chào',
      },
    //   apns: {
    //     payload: {
    //       aps: {
    //         badge: 42,
    //       },
    //     },
    //   },
    token: registrationToken,
    // condition: condition
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    process.exit(1);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    process.exit(-1);
  });
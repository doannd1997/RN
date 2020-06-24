
var admin = require("firebase-admin");

var serviceAccount = require("../public/appparent-firebase-adminsdk-cugj6-027f9922db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appparent.firebaseio.com"
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'eAEpi2cIQ42iwva_cnPy9o:APA91bElveXh35O7M-qogFBV9MUQfvjy6RbG2DFFMgfvhLP89OMoIAUG_kIFI8vOxN0J7lk6tC3mqcCIAPhWjM9-Luwqy7krGH9Fq2j-g0jJF29OzUGDEttUWV-2NEsy2I2-8Te_JhzQ';

var message = {
    notification: {
        title: 'đây là thông báo',
        body: 'thông báo gửi đến token',
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
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
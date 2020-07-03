
var admin = require("firebase-admin");

var serviceAccount = require("../public/appparent-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appparent.firebaseio.com"
});

var registrationToken = 'eoPPgrAfSn6IljJ8nOuPsw:APA91bGJuMT824v2sRzRrcifBRLPIuLGiepk5nDhvlOWtakxnLzFh27PBxqPo_MHUpyFO8grnn_Hac4g-_BRwlMTheUeYsXBW3LO-1wbF-cZX27cBnEIH8xvq_qA8Est5q75TIXIUM8A';

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
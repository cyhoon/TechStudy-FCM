const config = require('../config');
const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.databaseUrl
});

const registrationToken1 = config.registrationToken1
const registrationToken2 = config.registrationToken2
const registrationToken = [ registrationToken1, registrationToken2 ];

const payload = {
    notification: {
        title: "jeff",
        body: "great"
    },
    data: {
        type: 'msg',
        content: 'hello, world!'
    }
};

admin.messaging().sendToDevice(registrationToken, payload)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message: ', error);
    });
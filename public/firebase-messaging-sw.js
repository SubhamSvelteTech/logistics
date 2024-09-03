// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBbC4I5qDADSvnmtQ2Y3rPr3qsnDJ39BiE",
    authDomain: "ivf-logistics.firebaseapp.com",
    projectId: "ivf-logistics",
    storageBucket: "ivf-logistics.appspot.com",
    messagingSenderId: "783151391800",
    appId: "1:783151391800:web:2beecb7123b28b3c12f2cd",
    measurementId: "G-54LL61QL38"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();



messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message",
    payload
  );
  const notificationTitle = payload?.data?.title;
  const notificationOptions = {
    body: payload?.data?.body
  };

  if (notificationTitle) {
    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});

 



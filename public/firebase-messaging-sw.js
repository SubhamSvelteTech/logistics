// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyBoQnaK4tDUvYB0E5l_wUZLKWp13ZLEGGg",
    authDomain: "ivf-home.firebaseapp.com",
    projectId: "ivf-home",
    storageBucket: "ivf-home.appspot.com",
    messagingSenderId: "358597683476",
    appId: "1:358597683476:web:91cc94e502f07836bc7a01",
    measurementId: "G-M7X6C83MG1",
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

 



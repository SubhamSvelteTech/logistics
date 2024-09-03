"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig:any = {
    apiKey: "AIzaSyBbC4I5qDADSvnmtQ2Y3rPr3qsnDJ39BiE",
    authDomain: "ivf-logistics.firebaseapp.com",
    projectId: "ivf-logistics",
    storageBucket: "ivf-logistics.appspot.com",
    messagingSenderId: "783151391800",
    appId: "1:783151391800:web:2beecb7123b28b3c12f2cd",
    measurementId: "G-54LL61QL38"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export const messaging = () => getMessaging(firebaseapp);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging(), (payload) => {
      resolve(payload);
    });
  });

export default firebaseapp;

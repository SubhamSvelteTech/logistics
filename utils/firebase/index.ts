"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig:any = {
  apiKey: "AIzaSyBoQnaK4tDUvYB0E5l_wUZLKWp13ZLEGGg",
  authDomain: "ivf-home.firebaseapp.com",
  projectId: "ivf-home",
  storageBucket: "ivf-home.appspot.com",
  messagingSenderId: "358597683476",
  appId: "1:358597683476:web:91cc94e502f07836bc7a01",
  measurementId: "G-M7X6C83MG1",
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

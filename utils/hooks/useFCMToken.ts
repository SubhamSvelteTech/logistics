"use client";
import { useEffect, useState } from "react";
import { getToken, getMessaging, isSupported } from "firebase/messaging";
import firebaseapp, { messaging } from "../firebase";
import useNotificationPermission from "./useNotificationPermission";
// import "../../public/firebase-messaging-sw";

const useFCMToken = () => {
  // let permission: any;
  // if ("Notification" in window) {
  //   permission = useNotificationPermission();
  // }

  const [registerObj, setRegisterObj] = useState<any>();
  const [permission, setPermission] = useState<any>();
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const vapidKey = process.env.VAPID_KEY

  useEffect(() => {
    registerSW();
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      // console.log("useEffect");
      Notification.requestPermission()
        ?.then((permission) => {
          // console.log(permission)
          // console.log(permission, "permission", typeof permission);
          setPermission(permission);
        })
        .catch((error) => {
          if (error instanceof TypeError) {
            Notification.requestPermission((permission) => {
              console.log(permission, "catch");
            });
          }
        });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window && permission === "granted") {
      getFcmToken();
    }
  }, [permission, registerObj]);

  //  const messaging = (async () => {
  //   try {
  //     const isSupportedBrowser = await isSupported();
  //     if (isSupportedBrowser) {
  //       return getMessaging(firebaseapp);
  //     }
  //     console.log("Firebase is not supported in this browser");
  //     return null;
  //   } catch (err) {
  //     console.log(err);
  //     return null;
  //   }
  // })();

  // getOrRegisterServiceWorker function is used to try and get the service worker if it exists, otherwise it will register a new one.
  const registerSW = () => {
    if (
      "serviceWorker" in navigator &&
      typeof window.navigator.serviceWorker !== "undefined"
    ) {
      return window.navigator.serviceWorker
        .getRegistration("/firebase-push-notification-scope")
        .then((serviceWorker: any) => {
          if (serviceWorker) {
            setRegisterObj(serviceWorker);
            return serviceWorker;
          }

          return window.navigator.serviceWorker
            .register("/firebase-messaging-sw.js", {
              scope: "/firebase-push-notification-scope",
            })
            .then((registeration) => setRegisterObj(registeration));
          // setRegisterObj(registeration);
        });
    }
    // throw new Error("The browser doesn`t support service worker.");
  };

  // const registerSW = async () => {
  //   if (navigator && "serviceWorker" in navigator) {
  //     try {
  //       const registration = await navigator?.serviceWorker.register(
  //         "../../public/firebase-messaging-sw"
  //       );
  //       setRegisterObj(registration);
  //     } catch (error) {
  //       console.error("Error registering Service Worker:", error);
  //     }
  //   }
  // };

  const getFcmToken = async () => {
    //   try {
    //     const messagingResolve: any = await messaging;
    //     if (messagingResolve) {
    //       return registerSW().then((serviceWorkerRegistration) => {
    //         return Promise.resolve(
    //           getToken(messagingResolve, {
    //             vapidKey,
    //             serviceWorkerRegistration,
    //           })
    //         );
    //       });
    //     }
    //   } catch (error) {
    //     console.log("An error occurred while retrieving token. ", error);
    //   }
    // };
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      try {
        const fcm_token = await getToken(messaging(), {
          vapidKey,
          serviceWorkerRegistration: registerObj,
        });
        setFcmToken(fcm_token);
      } catch (error) {
        console.log("Error from setToken firebase:" + error);
      }
    }
  };

  return fcmToken;
};

export default useFCMToken;

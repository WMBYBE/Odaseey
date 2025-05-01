// import React, { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Link, router, Slot, Stack } from 'expo-router';
// import { Platform } from 'react-native';


// function useNotificationObserver() {
//   useEffect(() => {
//     let isMounted = true;

//     function redirect(notification: Notifications.Notification) {
//       const url = notification.request.content.data?.url;
//       if (url) {
//         router.push(url);
//       }
//     }

//     Notifications.getLastNotificationResponseAsync()
//       .then(response => {
//         if (!isMounted || !response?.notification) {
//           return;
//         }
//         redirect(response?.notification);
//       });

//     const subscription = Notifications.addNotificationResponseReceivedListener(response => {
//       redirect(response.notification);
//     });

//     return () => {
//       isMounted = false;
//       subscription.remove();
//     };
//   }, []);
// }

// export default function Layout() {

//     if (Platform.OS === 'android') {
//     useNotificationObserver();
//     }
//     }
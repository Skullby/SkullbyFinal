import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: process.env.API_KEY,
        authDomain: "skullby-47415.firebaseapp.com",
        projectId: "skullby-47415",
        storageBucket: "skullby-47415.appspot.com",
        messagingSenderId: "200225582852",
        appId: "1:200225582852:web:ed969401789263991d2a51",
      }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app); 
}
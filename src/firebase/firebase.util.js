// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyBXksRk-In4UlWH9YXgFysXcibRVfKDbR4",
  authDomain: "crwn-db-f4dd9.firebaseapp.com",
  databaseURL: "https://crwn-db-f4dd9.eur3.firebasedatabase.app",
  projectId: "crwn-db-f4dd9",
  storageBucket: "crwn-db-f4dd9.appspot.com",
  messagingSenderId: "465521814790",
  appId: "1:465521814790:web:95799743d489de38400287",
  measurementId: "G-VKEWDXCQ77",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

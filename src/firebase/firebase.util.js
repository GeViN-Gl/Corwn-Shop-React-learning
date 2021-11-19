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

/**Creates new User document in Firebase db if such user doesn't exist in our db
 *
 * Принимает
 * @param {Object} userAuth объект передаваемый firebase.auth()
 * @param {Object | Object[]} additionalData Any additional data to pass in to base
 * @returns {Object} userRef ( userAuth referense object ) from query to firestorm database
 *
 * The queryReference object does not have the actual data of the collection or document.
 *
 * It instead has properties that tell us details about it, and methods.
 * e.g. to get the Snapshot object which gives us the data we may looking for.
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if there is no Authed user, variable == null , do nothing

  const userRef = firestore.doc(`users/${userAuth.uid}`); // query to firestorm DB
  // The queryReference object does not have the actual data of the collection or document.
  // It instead has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.

  const snapShot = await userRef.get();
  // We get a documentSnapshot object from our documentReference object.
  // The documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean.
  // So if such user dosn`t exist (no prev logins) we will create document(record) of this new authed user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth; // take what we want to add to document from userAuth object
    const createdAt = new Date(); //curr time

    // then we try to store data and now we need to cath errors
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`😞 Error creatig user`, err.message);
    }
  }
  return userRef; //to chain or mb for something else
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

/** Эта функция будет обеспечивать вызов попапа для идетификации пользователя
 *
 * @returns Нужно помнить что функция нам ничего сейчас не вернет (кроме ошибки) но при успешной идентификации мы сможем спрашивать у auth кто сейчас залогинен и залогинен ли вообще
 */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// QueryReference and QuerySnapshot

// A query is a request we make to firestore to give us
// something from the database.

// Firestore returns us two types of objects: references and
// snapshots. Of these objects, they can be either Document or
// Collection versions.

// Firestore will always return us these objects, even if nothing
// exists at from that query.

// QueryReference
// A queryReference object is an object that represents the “current”
// place in the database that we are querying.

// We get them by calling either:
// firestore.doc(‘/users/:userId’);
// firestore.collections(‘/users’);

// The queryReference object does not have the actual data of the
// collection or document. It instead has properties that tell us details
// about it, or the method to get the Snapshot object which gives us the
// data we are looking for.

// Document Reference vs CollectionReference
// We use documentRef objects to perform our CRUD methods (create,
// retrieve, update, delete). The documentRef methods are .set(), .get(),
// .update() and .delete() respectively.
// We can also add documents to collections using the collectionRef
// object using the .add() method. // collectionRef.add({//value: prop})
// We get the snapshotObject from the referenceObject using the .get()
// method. ie. documentRef.get() or collectionRef.get()
// documentRef returns a documentSnapshot object.
// collectionRef returns a querySnapshot object.

// DocumentSnapshot
// We get a documentSnapshot object from our documentReference
// object.
// The documentSnapshot object allows us to check if a document exists
// at this query using the .exists property which returns a boolean.
// We can also get the actual properties on the object by calling
// the .data() method, which returns us a JSON object of the document.QuerySnapshot
// We get a querySnapshot object from our collectionReference object.
// We can check if there are any documents in the collection by calling
// the .empty property which returns a boolean.
// We can get all the documents in the collection by calling the .docs
// property. It returns an array of our documents as documentSnapshot
// objects

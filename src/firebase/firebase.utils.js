import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC60OytrvRLkvRlEPXIEdJW55X-2dUM2Q8",
  authDomain: "crwn-db-acff5.firebaseapp.com",
  databaseURL: "https://crwn-db-acff5.firebaseio.com",
  projectId: "crwn-db-acff5",
  storageBucket: "crwn-db-acff5.appspot.com",
  messagingSenderId: "765358379550",
  appId: "1:765358379550:web:c3cb99b138321a5f6cd40f",
  measurementId: "G-1ZP5D2FCJW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpkDbvYjX-gMx06yxK0mUgIF9S0liE1I",
  authDomain: "slack-f1af1.firebaseapp.com",
  databaseURL: "https://slack-f1af1-default-rtdb.firebaseio.com",
  projectId: "slack-f1af1",
  storageBucket: "slack-f1af1.appspot.com",
  messagingSenderId: "205308401513",
  appId: "1:205308401513:web:db0d47ae7ba0013d2bcff8",
  measurementId: "G-9R6729X7GC"
};

function initializeApp(): void {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}

initializeApp();

const auth: firebase.auth.Auth = firebase.auth();
const db: firebase.firestore.Firestore = firebase.firestore();

export {auth, db}
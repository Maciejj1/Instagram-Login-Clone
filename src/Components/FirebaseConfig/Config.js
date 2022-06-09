import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIPwdRnBW5NrctRmQ149o2WVUgnNmUIdQ",
  authDomain: "instagram-task-37102.firebaseapp.com",
  projectId: "instagram-task-37102",
  storageBucket: "instagram-task-37102.appspot.com",
  messagingSenderId: "277918127386",
  appId: "1:277918127386:web:799f5589274c9c197388a3",
  measurementId: "G-8YXVVH978F",
};

firebase.initializeApp(firebaseConfig);
const GoogleAuth = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db, GoogleAuth };

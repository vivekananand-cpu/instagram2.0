// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-VNMlBBrQp1vbvrd98A1X5cHlK1VSN4M",
  authDomain: "insta-2-52a26.firebaseapp.com",
  projectId: "insta-2-52a26",
  storageBucket: "insta-2-52a26.appspot.com",
  messagingSenderId: "464006986922",
  appId: "1:464006986922:web:676bf26f0fc3799c8a24d3",
  measurementId: "G-BCXLBH8E5Q"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
// const analytics = getAnalytics(app);
const db=getFirestore();
const storage=getStorage();

export {app,db,storage} ;
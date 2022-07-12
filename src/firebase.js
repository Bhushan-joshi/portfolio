// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Timestamp} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your Api key",
  authDomain: "your domain name",
  projectId: "your project id",
  storageBucket: "add stirage bucket",
  messagingSenderId: "messging sender id ",
  appId: "your app ID",
  measurementId: "add your ID",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
getAnalytics(firebase);
const db=getFirestore(firebase);

export{db,Timestamp}



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN3_1_ZjXky7YkFW1Rq1dIOKJ69KTjM8s",
  authDomain: "ubereats-420814.firebaseapp.com",
  projectId: "ubereats-420814",
  storageBucket: "ubereats-420814.appspot.com",
  messagingSenderId: "646857276392",
  appId: "1:646857276392:web:38daefdbe403bba2f1825d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;

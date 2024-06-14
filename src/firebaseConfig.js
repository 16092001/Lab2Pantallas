// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVZ_-SGPSapOZ-4l_jZlgdCDiLOsMxJE",
  authDomain: "appfruit-65913.firebaseapp.com",
  projectId: "appfruit-65913",
  storageBucket: "appfruit-65913.appspot.com",
  messagingSenderId: "633348417823",
  appId: "1:633348417823:web:6c76eb7be87002000e282a"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  
  export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAhie7j6jnDm_LNl1eCrSXQMUm6Kx-Kj1I",
  authDomain: "ibfarol-c9cf2.firebaseapp.com",
  projectId: "ibfarol-c9cf2",
  storageBucket: "ibfarol-c9cf2.appspot.com",
  messagingSenderId: "807186360476",
  appId: "1:807186360476:web:c1709da7960b74ed762559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

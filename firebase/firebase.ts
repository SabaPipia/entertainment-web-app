import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const fireebaseConfig = {
  apiKey: "AIzaSyCOThoXqFfQI0IJLTzdO88iKCN4LXjQZZI",
  authDomain: "entertainment-app-cec75.firebaseapp.com",
  projectId: "entertainment-app-cec75",
  storageBucket: "entertainment-app-cec75.appspot.com",
  messagingSenderId: "104573783691",
  appId: "1:104573783691:web:457607121d1c78e8134e8e",
  measurementId: "G-PVF3PMKJ8D",
};

const app = firebase.initializeApp(fireebaseConfig);
export const auth = getAuth(app);
export default app;

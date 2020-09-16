// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//at first npm i firebase
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB4aSlPThots1x6_rPPq2dXkcICUIGEZmw",
  authDomain: "travel-guru-react.firebaseapp.com",
  databaseURL: "https://travel-guru-react.firebaseio.com",
  projectId: "travel-guru-react",
  storageBucket: "travel-guru-react.appspot.com",
  messagingSenderId: "901410708463",
  appId: "1:901410708463:web:c6739d1c9b57853b28741a",
  measurementId: "G-T1FDS1FGGD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

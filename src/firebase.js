import firebase from "../node_modules/firebase/compat/app";
import "../node_modules/firebase/compat/auth";
import "../node_modules/firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlCFlknGwLvemY6scVdaXXPXcGGgkoY2M",
  authDomain: "quizpal-2084d.firebaseapp.com",
  projectId: "quizpal-2084d",
  storageBucket: "quizpal-2084d.appspot.com",
  messagingSenderId: "437970828877",
  appId: "1:437970828877:web:81585df31e5ee84648e604",
});

// データ
export const db = firebaseApp.firestore();

// ログイン
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

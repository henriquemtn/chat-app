import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAa-UCUfrD4xY-u7EGQMs0Sf-AUE-b2384",
  authDomain: "chat-app-f742a.firebaseapp.com",
  projectId: "chat-app-f742a",
  storageBucket: "chat-app-f742a.appspot.com",
  messagingSenderId: "788340022795",
  appId: "1:788340022795:web:6f1aa00be019d85f51b10e"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};

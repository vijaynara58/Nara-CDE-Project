import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCWSlS12NfO5efFWwg1JzoIDzN56c_Iotw",
    authDomain: "intern-project-c35cc.firebaseapp.com",
    projectId: "intern-project-c35cc",
    storageBucket: "intern-project-c35cc.appspot.com",
    messagingSenderId: "989816925132",
    appId: "1:989816925132:web:e5281273be9f19a00c8b69"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();

    export default db;


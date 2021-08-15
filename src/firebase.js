import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAzsJtWLtuU5QSxfE4AThMAgZ6iyUJih8M",
    authDomain: "slack-clone-e8db4.firebaseapp.com",
    projectId: "slack-clone-e8db4",
    storageBucket: "slack-clone-e8db4.appspot.com",
    messagingSenderId: "473211009412",
    appId: "1:473211009412:web:fb63745bd7bb6a32d8c5d1",
    measurementId: "G-DK4LNXPEV2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db,auth,provider }

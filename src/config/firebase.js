import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1IIXuRD17Eu0PFQo9D0xKgGdsKx-yFc4",
    authDomain: "lets-decide-4d62a.firebaseapp.com",
    databaseURL: "https://lets-decide-4d62a-default-rtdb.firebaseio.com",
    projectId: "lets-decide-4d62a",
    storageBucket: "lets-decide-4d62a.appspot.com",
    messagingSenderId: "64416401364",
    appId: "1:64416401364:web:5d52667a1197d88a223841",
    measurementId: "G-J9PMZBXKB5"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
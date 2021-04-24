import firebase from 'firebase'
require("@firebase/firestore")



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC03b7WiZEsFfvb99_RmO_8wLR0dwm7IfQ",
    authDomain: "bed-time-stories-6521e.firebaseapp.com",
    projectId: "bed-time-stories-6521e",
    storageBucket: "bed-time-stories-6521e.appspot.com",
    messagingSenderId: "991117796835",
    appId: "1:991117796835:web:86063999901544b8bc2cd6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore()      
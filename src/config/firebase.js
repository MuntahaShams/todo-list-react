import * as firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAX2jeG4tCOnHcjMPh5ygLn5AQ_-Ffmp5M",
    authDomain: "todo-react-9dd06.firebaseapp.com",
    databaseURL: "https://todo-react-9dd06.firebaseio.com",
    projectId: "todo-react-9dd06",
    storageBucket: "todo-react-9dd06.appspot.com",
    messagingSenderId: "41142094960",
    appId: "1:41142094960:web:32159cde9d9895a48538b5",
    measurementId: "G-QDFZN88GE4"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  

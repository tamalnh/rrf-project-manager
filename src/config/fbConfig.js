import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'; 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnWM9WpsJDF34QIaszFT3WsuSuoijg1xU",
    authDomain: "rrf-project-manager.firebaseapp.com",
    databaseURL: "https://rrf-project-manager.firebaseio.com",
    projectId: "rrf-project-manager",
    storageBucket: "rrf-project-manager.appspot.com",
    messagingSenderId: "69135997470",
    appId: "1:69135997470:web:cb27878b4af6d143"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzd7C8EPu71kb9GAk_jszt015yi6BgXkk",
    authDomain: "mr-cafe-d3bff.firebaseapp.com",
    projectId: "mr-cafe-d3bff",
    storageBucket: "mr-cafe-d3bff.appspot.com",
    messagingSenderId: "520595162806",
    appId: "1:520595162806:web:5d9aa422fb4b5e95320817"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
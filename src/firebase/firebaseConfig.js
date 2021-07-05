import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDd5J3tifCUh9yfC6m4KbO7xz82ZDXjEJ4",
    authDomain: "react-app-curso-e396a.firebaseapp.com",
    projectId: "react-app-curso-e396a",
    storageBucket: "react-app-curso-e396a.appspot.com",
    messagingSenderId: "126586138202",
    appId: "1:126586138202:web:db8b5f82b7639ce481f263"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
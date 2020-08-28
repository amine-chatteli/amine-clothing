import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-bRLGEp5l_Pwv5xP-Z0w3UF1T3XZpJhs",
    authDomain: "amine-clothing.firebaseapp.com",
    databaseURL: "https://amine-clothing.firebaseio.com",
    projectId: "amine-clothing",
    storageBucket: "amine-clothing.appspot.com",
    messagingSenderId: "1060975249484",
    appId: "1:1060975249484:web:2e53cb4ee8d806144a4ce9",
    measurementId: "G-QCF4K3J246"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase; 
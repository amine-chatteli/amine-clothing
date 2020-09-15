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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
// add data to firestore to avoid adding it manually
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });
    return await batch.commit()
}
//convert the data that we get from firestore to the format needed on our frontend
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title),
            id: doc.id,
            title,
            items
        };
    });
  return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title]=collection;
        return accumulator;
   },{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
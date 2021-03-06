import firebase from 'firebase/app'
import 'firebase/storage'
import "firebase/firestore"

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let storage;
let database;
let FieldValue;

if (typeof window !== 'undefined' && !firebase.apps.length) {  
    firebase.initializeApp(clientCredentials) 
    // To enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ('measurementId' in clientCredentials) {
        firebase.analytics()
        firebase.performance()
    } 
    storage = firebase.storage()
    database = firebase.firestore()
    FieldValue = firebase.firestore.FieldValue  
}


export {storage, database, FieldValue}
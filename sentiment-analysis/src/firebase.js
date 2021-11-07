/**
 * Manages the databse that we use to store our users
 * Exports auth, which is in charge of siging the user in and general authentication
 * 
 * 1.0.0
 * 11/3/21
 */


import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})
const auth = app.auth()

export {
    auth
}
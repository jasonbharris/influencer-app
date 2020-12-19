import firebase from 'firebase'

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgBN6xEboe5TU9LyZ_uGMShe0Nqw0PIaM",
    authDomain: "react-firebase-influencer.firebaseapp.com",
    projectId: "react-firebase-influencer",
    storageBucket: "react-firebase-influencer.appspot.com",
    messagingSenderId: "1051311514736",
    appId: "1:1051311514736:web:e2459b61793b1f187dc0b5"
  })

  const db = firebaseApp.firestore()

  export { db }

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_EW9eyjsA3wemwmjNq5P99y5i0Y2KXLU",
    authDomain: "shoesters-d25da.firebaseapp.com",
    projectId: "shoesters-d25da",
    storageBucket: "shoesters-d25da.appspot.com",
    messagingSenderId: "396562714210",
    appId: "1:396562714210:web:19d19cb9fd9423b8710b3b"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
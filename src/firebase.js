import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD4iBVHuze7ONy0AVjYrDDakm3fPsE9Sd0",
  authDomain: "netflix-build-78a5a.firebaseapp.com",
  projectId: "netflix-build-78a5a",
  storageBucket: "netflix-build-78a5a.appspot.com",
  messagingSenderId: "705107485014",
  appId: "1:705107485014:web:e0f850ada3b58d98eeb6f7",
  measurementId: "G-NKDSXBQ21Q",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db

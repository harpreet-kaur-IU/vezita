import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpdU5Q7qzl4nIsN4onu-1BT5cVqIPbBsQ",
  authDomain: "vezita-acdde.firebaseapp.com",
  projectId: "vezita-acdde",
  storageBucket: "vezita-acdde.appspot.com",
  messagingSenderId: "813637316925",
  appId: "1:813637316925:web:abdccd38be6a777b635554",
  measurementId: "G-NMCQ8XCHSC"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase;
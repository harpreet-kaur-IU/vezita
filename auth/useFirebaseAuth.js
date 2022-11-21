import firebase from './firebaseConfig';
import { removeVezitaOnBoardCookie } from "./userCookies";

export default function useFirebaseAuth(){ 
    const clear = () => {
        removeVezitaOnBoardCookie();
    }
   
    const signInWithEmailAndPassword = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password);
    
    const createUserWithEmailAndPassword = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password);
    
    const signOut = () => 
        firebase.auth().signOut().then(clear);

    const signOutOnBoard = () =>{
        firebase.auth().signOut();
    }
    return {
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        signOutOnBoard
    };
}
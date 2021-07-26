import React, { useContext , useEffect, useState} from 'react';
import db from '../../firebase';
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = React.createContext();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export function useAuth(){
    return useContext(AuthContext);     
}

export function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true);
const [isAdmin, setIsAdmin] = useState(false);

async function signup(email, password){
    const value = await auth.createUserWithEmailAndPassword(email, password).then((user) => {
        db.collection('Users').doc(user.uid).set({
            'email' : user.email,
            'displayName' : user.displayName,
            'phoneNumber' : "",
            'recents' : []
        })    
    });
    return value;
}

async function login(email, password){
    const returnValue =  auth.signInWithEmailAndPassword(email, password);
    if(currentUser && currentUser.uid === '3R3gIXNpJIcvqyybymsfUxoPt5Q2'){
        console.log('User Is Admin');
        setIsAdmin(true);
    }

    return returnValue;
}

function logout(){
    return auth.signOut();
}

async function googleSignIn(){
    return await auth.signInWithPopup(googleProvider)
    .then(async(result) => {
        const user = result.user;
        if(currentUser && currentUser.uid === '3R3gIXNpJIcvqyybymsfUxoPt5Q2'){
            console.log('User Is Admin');
            setIsAdmin(true);
        }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
    });
  }

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setLoading(false);  
        setCurrentUser(user);
    })
    return unsubscribe;
}, [])


const value = {
    currentUser,
    isAdmin,
    signup,
    login,
    logout,
    googleSignIn,
}

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
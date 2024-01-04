import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth=getAuth(app);
const googlProvider=new GoogleAuthProvider()

export const  AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true)

   
    // sign in with email and password
    const userLogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign in with google
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googlProvider)
    }

     // create with email and password
     const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // logout user
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update user name and photo
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
   
    const authInfo={
        user,
        createUser,
        userLogIn,
        auth,
        logOutUser,
        loading,
        googleLogin,
        updateUserProfile
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
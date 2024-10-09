import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext=createContext(null)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    // create sign up in password----------------
 const createSignUp=async(email,password)=>{
    return await createUserWithEmailAndPassword(auth,email,password)
 }
//  sign in with email ane password -------------
 const signIn=async(email,password)=>{
    return await signInWithEmailAndPassword(auth,email,password)
 }
//  ----google sign in -----------------
const googleSignIn=async()=>{
  return signInWithPopup(auth, provider)

}
// work about log out button _____-----------------
const logOut=async()=>{
    return await signOut(auth)
}
// -----------------update user name and photo --------
const updateUserProfile=async(name,photoURL)=>{
      return await updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoURL
      })
}
// ------manage users ----------------
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log("current user ------------>",currentUser)
    })
    return ()=>{
         unSubscribe()}
})


    const authInfo={
        user,
        setUser,
        createSignUp,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
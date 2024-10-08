import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export const AuthContext=createContext(null)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()


const AuthProvider = ({children}) => {

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
  return await  signInWithPopup(auth, provider)
}

    const authInfo={
        createSignUp,
        signIn,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
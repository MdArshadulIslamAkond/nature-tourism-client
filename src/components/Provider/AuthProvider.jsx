
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../../firebase/firebase.config.js";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const[users, setUsers] = useState(null);
    const [loading, setLodings] = useState(true);

    const createUsers = (email, password)=>{
        setLodings(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate = (currentUser, profile)=>{
        // update user profile here
        return updateProfile(currentUser, profile);
    }

    const loginUsers = (email, password) => {
        setLodings(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setLodings(true);
        return signOut(auth);
    }

    const signINGoogle =()=>{
        setLodings(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signingithub =()=>{
        setLodings(true);
        return signInWithPopup(auth, githubProvider);
    };

    // observe auth state changes
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUsers(currentUser);

            setLodings(false);
            if(!currentUser){
                setUsers(null);
            }
        })
        return ()=>{
            unSubscribe();
        }
    });
    const authInfo = {
        users,
        loading,
        createUsers,
        loginUsers,
        logOut,
        profileUpdate,
        signINGoogle,
        signingithub,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
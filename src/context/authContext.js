import  { useState, useContext, createContext } from "react";
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const navigate = useNavigate();
    const name = "Israel";
    const age = 26;
    const add = (b) => {
        return 4 + b;
    }

    const signIn = async (email, password) => {
        return  await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/posting");
            console.log(user)
            // ...
        })
        .catch((error) => {                
            const errorMessage = error.message;
            console.log("1", errorMessage)
            alert("Error logging in, please try again")
        });
    }
    

    const value = {
        name,
        age, 
        add,
        signIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    const context = useContext(AuthContext);

    if(context===undefined){
        throw new Error("context must be used within a provider")
    }
    return context
}
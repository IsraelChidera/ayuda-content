import  { useState, useContext, createContext, useEffect } from "react";
import {auth} from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export function AuthContextProvider({children}){ 
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState("");

    const name = "Israel";
    const age = 26;
    const add = (b) => {
        return 4 + b;
    }    

    const signIn = async (email, password) => {
        setLoading(true);
        return  await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/posting");            
            setLoading(false);            
        })
        .catch((error) => {                
            const errorMessage = error.message;
            console.log("1", errorMessage)
            alert("Error logging in, please try again")
            setLoading(false);            
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUsers(uid)
                console.log("logged in");
                console.log("uid", users);
                // ...
            } else {
                // User is signed out
                
                console.log("not logged in");
                setUsers(user);          
                console.log("uid", user);
                console.log("users: ", users);
            }
        });
    
    }, [users])
    
    const value = {
        name,
        age, 
        add,
        signIn,
        loading,
        users
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
import  { useState, useContext, createContext } from "react";


const AuthContext = createContext();

export function AuthContextProvider({children}){
    const name = "Israel";
    const age = 26;

    const value = {
        name,
        age
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
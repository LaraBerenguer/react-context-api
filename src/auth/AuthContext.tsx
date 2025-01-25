import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, UserCredential, User, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./credentials/credentials";

interface AuthContext {
    currentUser: User | null,
    signUp: (email: string, password: string) => Promise<UserCredential>;
    logIn: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [currentUser, setCurrentUser] = useState<null | any>(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const signUp = (email: string, password: string) => {    
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email: string, password: string) => {    
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {    
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [auth]);

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
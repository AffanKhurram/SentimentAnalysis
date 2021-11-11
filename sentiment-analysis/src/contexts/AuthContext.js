/**
 * A newer way to organize our authentication methods
 * This will create helper sign in and sign up functions so that we don't rewrite
 * the same code for trhe other pages
 * TODO: Create login helper function and signout helper function
 * 
 * 1.0.0
 * 11/6/21
 */
import React, { useContext , useState, useEffect } from 'react'
import { auth } from '../firebase.js'

const AuthContext = React.createContext()

// Function that everything uses to reference this context
export function useAuth() { 
    return useContext(AuthContext)
} 

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // Calls the signup function on the database
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    // Calls the login function on the database
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    // Signs out the current user
    function signOut() {
        if (currentUser) {
            auth.signOut()
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    // Functions and variables that other componenents will need access to
    const value = {
        currentUser,
        signup,
        login,
        signOut
    }

    // Return the context, providing the values that everything should be able to use
    return (
        <AuthContext.Provider value={value}>
           { !loading && children } 
        </AuthContext.Provider>
    )
}

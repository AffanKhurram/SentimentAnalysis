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

export function useAuth() { 
    return useContext(AuthContext)
} 

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
           { !loading && children } 
        </AuthContext.Provider>
    )
}

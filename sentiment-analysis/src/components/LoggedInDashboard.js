/**
 * This is the page after a user logs in
 * Displays the email of the current user
 * TODO: Add product history
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function LoggedInDashboard() {
    const { currentUser, signOut } = useAuth()
    const navigate = useNavigate()
    
    useEffect(function() {
        if (!currentUser) {
            navigate("/")
        }
    }, [])

    async function logout() {
        // signOut()
        //     .then(function (res) {
        //         navigate("/")
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //     })           

        try {
            await signOut()
            console.log(currentUser)
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            Logged in as
            <div>{currentUser?.email}</div>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}

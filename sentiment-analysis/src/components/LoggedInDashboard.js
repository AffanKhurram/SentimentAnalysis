/**
 * This is the page after a user logs in
 * Displays the email of the current user
 * TODO: Add product history
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function LoggedInDashboard() {
    const { currentUser, signOut } = useAuth()
    const navigate = useNavigate()
    
    // If user is not logged in and we are on this page, then go back to the logged out dashboard
    useEffect(function() {
        if (!currentUser) {
            navigate("/", [currentUser])
        }
    }, [currentUser, navigate])

    // Logs out the current user 
    async function logout() {
        try {
            await signOut()
        }
        catch (e) {
            console.log(e)
        }
    }

    // This page's layout
    // For now, just displays user's email and then a logout button
    return (
        <div>
            Logged in as
            <div>{currentUser?.email}</div>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}

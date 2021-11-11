/**
 * The main page for our app
 * Has links to login page, sign up page, and word processing page
 * redirects user if the user is already loggedin
 * 
 * 1.1.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

export default function Dashboard() {
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    // If logged in, then redirect to LoggedInDashboard
    useEffect(function() {
            if (currentUser) {
                navigate("/loggedindashboard", [currentUser])
            }
        }, [currentUser])


    // Return the layout of the page
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/login">Login</Link><br></br>
            <Link to="/signup">Sign Up</Link><br></br>
            <Link to="/wordprocessing">Word Processing Page</Link>
        </div>
    )
}

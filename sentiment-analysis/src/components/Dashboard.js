/**
 * The main page for our app
 * Has links to login page, sign up page, and word processing page
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/login">Login</Link><br></br>
            <Link to="/signup">Sign Up</Link><br></br>
            <Link to="/wordprocessing">Word Processing Page</Link>
        </div>
    )
}

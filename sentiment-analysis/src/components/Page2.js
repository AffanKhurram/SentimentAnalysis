import React from 'react'
import './Page2.css'
import './Dashboard.css'
import { Link } from 'react-router-dom'

export default function Page2() {
    return (
        <div>
            <h1 className = "headers">Settings</h1><br></br>
            <br></br>
            <br></br>
            <h3> Change the Back Ground Color </h3>
            <h3 className = "headers"><Link to="/">Dashboard</Link></h3>

        </div>
    )
}

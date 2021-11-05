import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            Click <Link to="/wordprocessing">here</Link> to go to word processing page.
        </div>
    )
}

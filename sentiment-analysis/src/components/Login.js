/**
 * Login page for our app
 * Shows an email and password box for the user to fill
 * Once filled, it verifies using the firebase auth
 * if successful, then go to loggedInDashboard (User page)
 * otherwise give an error message
 */


import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // Redirect to the loggedin dashboard after the user has successfully logged in
    useEffect(function() {
        if (currentUser) {
            navigate("/loggedindashboard", [currentUser])
        }
    }, [currentUser, navigate])
    
    // Called when login button is pressed
    async function handleSubmit(e) {
        e.preventDefault()

        // Try to log in the user with given username and password
        try {
            setLoading(true)
            setError("")
            await login(emailRef.current.value, passwordRef.current.value)
        }
        catch (e) {
            // Show error message if something went wrong when trying to log in
            console.log(e)
            setError("Failed to login")
        }
    }

    // HTML layout of page
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Log In
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <div className="w-100 text-center mt-2">
                Go back to <Link to="/">dashboard</Link>
            </div>
        </>
    )
}

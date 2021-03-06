/**
 * Manages the registration page for our app
 * Asks user for an email, password, and to verify password
 * Then, use firebase auth token to register new user
 * if user already exists then give error message
 * otherwise register user and go to loggedindashboard (User page)
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import "./Dashboard"
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, signup, getColor, color } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    getColor()

    useEffect(function () {
    }, [color])

    // Redirect to the loggedin dashboard page after the user signs up
    useEffect(function() {
        if (currentUser) {
            navigate("/loggedindashboard", [currentUser])
        }
    }, [currentUser, navigate])

    const themeDark = createTheme({

        palette: {
            background: {
                default: color
            },
            text: {
                primary: "#ffffff"
            }
        }
    });

    // Called when submit button is clicked
    async function handleSubmit(e) {
        e.preventDefault()

        // Make sure that the user entered the same passwordf or both password and confirm password field
        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        // Try to create a new user on the database with given information
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (e) {
            // If something goes wrong, show error message
            console.log(e.code)
            var error_message = ''
            switch(e.code) {
                case 'auth/invalid-email':
                    error_message = 'Please enter a valid email address'
                    break
                case 'auth/weak-password':
                    error_message = 'Weak password: password must contain at least 6 characters'
                    break
                case 'auth/email-already-in-use':
                    error_message = 'Email already used for another account'
                    break
                default:
                    error_message = 'Failed to create account'
            }
            setError(error_message)
            setLoading(false)
        }

        setLoading(false)

    }

    // Basic layout of the page in HTML
    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline/>
            <Card>
                <Card.Body>
                    <h2 className="logintext">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit} className="text">
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Sign Up
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
            <div className="w-100 text-center mt-2">
                Go back to <Link to="/">dashboard</Link>
            </div>
        </MuiThemeProvider>
    )
}

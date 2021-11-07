/**
 * Manages the registration page for our app
 * Asks user for an email, password, and to verify password
 * Then, use firebase auth token to register new user
 * if user already exists then give error message
 * otherwise register user and go to page1 (User page)
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, load, err] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(function() {
        if (load) {
            return
        }
        if (user) {
            navigate("/page1", [user, load])
        }
    }, [user, load])

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            console.log(error)
            setError("Failed to create an account")
        }

        setLoading(false)

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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
        </>
    )
}

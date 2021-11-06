import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
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

        // try {
        //     setError("")
        //     setLoading(true)
        //     await login(emailRef.current.value, passwordRef.current.value)
        //     const auth = getAuth()
        //     await signInWithEmailAndPassword()
        // } catch(error) {
        //     console.log('test')
        //     console.log(error)
        //     setError("Failed to sign in")
        // }
        
        // setLoading(false)
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(function (res) {
                console.log(res.user)
            })
            .catch(function (err) {
                console.log(err)
                setError("Failed to log-in")
            })
    }

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

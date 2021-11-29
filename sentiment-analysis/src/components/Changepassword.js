import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import './Dashboard.css'


export default function Changepassword() {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, changePassword, signOut, color, getColor } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(function() {
        if (!currentUser) {
            navigate("/", [currentUser])
        }
    }, [currentUser, navigate])

    getColor()

    useEffect(function () {
    }, [color])

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
            await changePassword(passwordRef.current.value)
            await signOut()
        } catch {
            // If something goes wrong, show error message
            console.log(error)
            setError("Failed to update password")
            setLoading(false)
        }

        setLoading(false)

    }

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Card>
                <Card.Body>
                    <h2 className="logintext">Change Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} className="text">
                        <Form.Group id="new password">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Change password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Go back to <Link to="/">dashboard</Link>
            </div>
        </MuiThemeProvider>
    )
}

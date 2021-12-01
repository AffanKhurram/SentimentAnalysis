/**
 * The main page for our app
 * Has links to login page, sign up page, and word processing page
 * redirects user if the user is already loggedin
 *
 * 1.1.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
//import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'
import './Dashboard.css'
import Button from '@material-ui/core/Button'
import InputIcon from '@material-ui/icons/Input'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";



export default function Dashboard() {
    const { currentUser, color, getColor } = useAuth()
    const navigate = useNavigate()

    // If logged in, then redirect to LoggedInDashboard
    useEffect(function () {
        if (currentUser) {
            navigate("/loggedindashboard", [currentUser])
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


    // Return the layout of the page
    return (

        <div>
            <MuiThemeProvider theme={themeDark}>
                <img alt="not found" src={process.env.PUBLIC_URL + '/MainProjPic.png'} className="image" />
                <h1 className="header">Review Busters</h1>
                <br></br>
                <CssBaseline />
                <Button endIcon={<InputIcon />} component={Link} to="/login" size="large" variant="contained" color="primary">
                    Login
                </Button>
                <br /><br />
                <Button endIcon={<InputIcon />} component={Link} to="/signup" size="large" variant="contained" color="primary">
                    signup
                </Button>
                <br /><br />
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="large" to="/wordprocessing" variant="contained" color="primary">
                    wordprocessing
                </Button>
                <br /><br />
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="large" to="/product" variant="contained" color="primary">
                    Products Page
                </Button>
            </MuiThemeProvider>
        </div>

    )
}


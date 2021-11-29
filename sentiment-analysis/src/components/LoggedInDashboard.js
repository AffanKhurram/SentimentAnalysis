/**
 * This is the page after a user logs in
 * Displays the email of the current user
 * TODO: Add product history
 * 
 * 1.0.0
 * 11/3/21
 */


import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function LoggedInDashboard() {
    const { currentUser, signOut, color, getColor } = useAuth()
    const navigate = useNavigate()
    
    // If user is not logged in and we are on this page, then go back to the logged out dashboard
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

    // Logs out the current user 
    async function logout() {
        try {
            await signOut()
        }
        catch (e) {
            console.log(e)
        }
    }

    // This page's layout
    // For now, just displays user's email and then a logout button
    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
        <div className="lighttext">
            Logged in as {currentUser?.email}<br/><br/>
            <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/wordprocessing" variant="contained" color="primary">
                wordprocessing
            </Button> <br/><br/>
            <Button endIcon={<ArrowForwardIosIcon />} size="small" variant="contained" color="primary" onClick={logout}>
                Logout
            </Button> <br/><br/>
            <Button endIcon={<ArrowForwardIosIcon />} component={Link} to="/settings" size="small" variant="contained" color="primary">
                Settings
            </Button>
        </div>
        </MuiThemeProvider>
    )
}

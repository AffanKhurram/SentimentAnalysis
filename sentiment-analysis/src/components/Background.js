import React from 'react'
import './Page2.css'
import './Dashboard.css'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";



export default function Background() {
    const { currentUser, color, changeColor } = useAuth()

    changeColor()

    const themeDark = createTheme({
        palette: {
            background: {
                default: color
                // default: "#00ff00"
            },
            text: {
                primary: "#ffffff"
            }
        }
    });
    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
        <div>
            <h1 className = "headers">Settings</h1><br></br>
            <br></br>
            <br></br>
            <h3> Change the Background Color </h3>
            <h3 className = "headers"><Link to="/">Dashboard</Link></h3>

        </div>
        </MuiThemeProvider>
    )
}

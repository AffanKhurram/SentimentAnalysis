import React, { useEffect } from 'react'
import './Page2.css'
import './Dashboard.css'
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";



export default function Background() {
    const { currentUser, color, changeColor, getColor } = useAuth()


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

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <span className='lightlogintext'>
                Select a color: <input type="color" value={color} onChange={e => changeColor(e.target.value, currentUser.email.replace('.', ''))} />
            </span><br/><br/>
            <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/" variant="contained" color="primary">
                Dashboard
            </Button> <br /><br />
        </MuiThemeProvider>

    )
}

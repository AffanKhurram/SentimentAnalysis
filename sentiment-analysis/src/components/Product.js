import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Dashboard.css'

export default function Product() {
    const { color, getColor } = useAuth()
    const navigate = useNavigate()
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
            <div className="text-center mt-2">
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/" variant="contained" color="primary">
                    Dashboard
                </Button> <br /><br />
            </div>
            <CssBaseline />
        </MuiThemeProvider>
    )
}

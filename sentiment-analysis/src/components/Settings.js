import React from 'react'
import './Dashboard.css'
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";


const themeDark = createTheme({
    palette: {
        background: {
            default: "#232f3e"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

export default function Settings() {
    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <h2 className="lightlogintext">Settings</h2>
            <div className="text-center mt-2">
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/changepassword" variant="contained" color="primary">
                    Change Password
                </Button> <br /><br />
                {/* <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/backgroundcolor" variant="contained" color="primary">
                    Change Background Color
                </Button> <br /><br /> */}
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/" variant="contained" color="primary">
                    Dashboard
                </Button> <br /><br />
            </div>
        </MuiThemeProvider>
    )
}

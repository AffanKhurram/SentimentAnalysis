/**
 * The main sentiment analysis for our project
 * Gives user a text box to enter text into and then analyzes it
 * TODO: calculate analyze score
 * 
 * 0.5.0
 * 11/3/21
 */

import Button from '@material-ui/core/Button'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import "./Dashboard"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function WordProcessing() {

    const { color, getColor } = useAuth()


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

    async function analyze(e) {
        e.preventDefault()
        console.log("analyze!")
    }

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Card>
                <Card.Body>
                    <Form onSubmit={analyze}>
                        <Form.Group id='text' className="logintext">
                            <Form.Label>Enter your text here</Form.Label>
                            <Form.Control as="textarea" rows={5}></Form.Control>
                        </Form.Group>
                        <div className="text-center mt-2">
                            <Button type="submit" variant="contained" color="secondary">
                                Analyze
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
                <div className="text-center mt-2">
                    <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/" variant="contained" color="primary">
                        Dashboard
                    </Button> <br /><br />
                </div>
            </Card>
        </MuiThemeProvider>
    )
}

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
import { useEffect, useState, useRef } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import "./Dashboard"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import feedback_json from "../feedback.json";

function binarySearch(ar, el) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        if (el > ar[k]) {
            m = k + 1;
        } else if (el < ar[k]) {
            n = k - 1;
        } else {
            return true;
        }
    }
    return false;
}

export default function WordProcessing() {

    const { color, getColor } = useAuth()
    const [score, setScore] = useState(0)
    const textRef = useRef()
    const positive = feedback_json['positive']
    const negative = feedback_json['negative']
    let reviewScore = 0


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
        e.preventDefault(); // prevents page from refreshing on submit
        //setOpen(true);

        let positiveScore = 0
        let negativeScore = 0
        let tempPositive = []
        let tempNegative = []

        const getScore = textRef.current.value.split(" ").map(w => {
            if (tempPositive.includes(w)) {
                positiveScore += 1;
            } else if (tempNegative.includes(w)) {
                negativeScore += 1;
            } else if (binarySearch(positive, w)) {
                positiveScore += 1;
                tempPositive.push(w);
            } else if (binarySearch(negative, w)) {
                negativeScore += 1;
                tempNegative.push(w)
            }
        })

        reviewScore = positiveScore - negativeScore
        setScore(reviewScore)
        console.log(reviewScore)
    }

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Card>
                <Card.Body>
                    <Form onSubmit={analyze}>
                        <Form.Group id='text' className="logintext">
                            <Form.Label>Enter your text here</Form.Label>
                            <Form.Control as="textarea" rows={5} ref={textRef}></Form.Control>
                        </Form.Group>
                        <div className="text-center mt-2">

                            <div className="text">
                                Review score = {score} <br />
                            </div>
                        </div>
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

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
export const great = require('../emojis/great.png')
export const good = require('../emojis/good.png')
export const neutral = require('../emojis/neutral.png')
export const bad = require('../emojis/bad.png')
export const worst = require('../emojis/worst.png')


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

    const { color, getColor, saveReview } = useAuth()
    const [score, setScore] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [currentPositive, setPositive] = useState("")
    const [currentNegative, setNegative] = useState("")
    const [currentEmoji, setEmoji] = useState(great)
    const textRef = useRef()
    const formRef = useRef()
    const positive = feedback_json['positive']
    const negative = feedback_json['negative']

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

        let reviewScore = 0
        let positiveWords = []
        let negativeWords = []

        textRef.current.value.split(" ").map((w,i,arr) => {
            if (positiveWords.includes(w)) {
                reviewScore += (arr[i-1] === "not" ? -1 : 1)
            } else if (negativeWords.includes(w)) {
                reviewScore += (arr[i-1] === "not" ? 1 : -1)
            } else if (binarySearch(positive, w)) {
                reviewScore += (arr[i-1] === "not" ? -1 : 1)
                arr[i-1] === "not" ? negativeWords.push("not "+w) : positiveWords.push(w)
            } else if (binarySearch(negative, w)) {
                reviewScore += (arr[i-1] === "not" ? 1 : -1)
                arr[i-1] === "not" ? positiveWords.push("not "+w) : negativeWords.push(w)
            }
        })

        setPositive(positiveWords.join(", "))
        setNegative(negativeWords.join(", "))
        setScore(reviewScore)
        setCurrentText(textRef.current.value)
        var review_obj = {
            text: textRef.current.value,
            positive: positiveWords,
            negative: negativeWords,
            score: reviewScore
        }
        saveReview(review_obj)
    }

    async function reset(e) {
        e.preventDefault();
        formRef.current.reset();
        setScore(0)
        setCurrentText("")
        setPositive("")
        setNegative("")
    }

    function onAnalyze(e) {
        setScore(0)
        setCurrentText(textRef.current.value)
        setPositive("")
        setNegative("")
        analyze(e)
        
    }

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <Card>
                <Card.Body>
                    <Form onSubmit={onAnalyze} ref={formRef}> 
                        <Form.Group id='text' className="logintext">
                            <Form.Label>Enter your text here</Form.Label>
                            <Form.Control as="textarea" rows={5} ref={textRef}></Form.Control>
                        </Form.Group>
                        <div className="text-center mt-2">
                            <Button type="submit" variant="contained" color="secondary">
                                Analyze
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <br/>
            <Card>
                <Card.Body>
                    <Form onSubmit={reset}>
                        <Form.Group id='text' className="logintext">
                            <Form.Label>Results</Form.Label>
                        </Form.Group>
                        <div className="text-center mt-2">
                            <div className="text">
                                Text Analyzed: <br />
                                {currentText} <br /><br />
                                Review score: {score} <br /> <br />
                                All positive words: <br />
                                {currentPositive} <br /><br />
                                All negative words: <br />
                                {currentNegative} <br /><br />

                                <img src={currentEmoji} />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <Button type="submit" variant="contained" color="secondary">
                                Reset
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

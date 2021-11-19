/**
 * The main sentiment analysis for our project
 * Gives user a text box to enter text into and then analyzes it
 * TODO: calculate analyze score
 * 
 * 0.5.0
 * 11/3/21
 */

import Button from '@restart/ui/esm/Button'
import React, { useRef, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import feedback_json from "../feedback.json";

function binarySearch(ar, el) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        if (el > ar[k]) {
            m = k + 1;
        } else if(el < ar[k]) {
            n = k - 1;
        } else {
            return true;
        }
    }
    return false;
}

export default function WordProcessing() {
    const textRef = useRef()
    const positive = feedback_json['positive']
    const negative = feedback_json['negative']
    let reviewScore = 0
    // const [open, setOpen] = useState(false);

    // const handleClose = () => {
    //     setOpen(false);
    // };

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
        console.log(reviewScore)
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={analyze}>
                    <Form.Group id='text' className="w-300">
                        <Form.Label>Enter your text here</Form.Label>
                        <Form.Control as="textarea" rows={5} ref={textRef} required />
                    </Form.Group>
                    <div className="text-center mt-2">
                        <Button type="submit" onClick={analyze}>
                            Analyze
                        </Button>
                        {/* <Dialog open={open} onClose={handleClose}>
                            <DialogContent>
                                <DialogContentText>
                                    {textRef.current.value}
                                </DialogContentText>
                            </DialogContent>
                        
                        </Dialog> */}
                    </div>
                </Form>
            </Card.Body>
            
            <div className="w-100 text-center mt-2">
                Review score = {reviewScore} <br/>
                Go back to <Link to="/">dashboard</Link>
            </div>
        </Card>
    )
}

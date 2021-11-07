/**
 * The main sentiment analysis for our project
 * Gives user a text box to enter text into and then analyzes it
 * TODO: calculate analyze score
 * 
 * 0.5.0
 * 11/3/21
 */

import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function WordProcessing() {
    
    async function analyze(e) {
        console.log("analyze!")
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={analyze}>
                    <Form.Group id='text' className="w-300">
                        <Form.Label>Enter your text here</Form.Label>
                        <Form.Control as="textarea" rows={5}></Form.Control>
                    </Form.Group>
                    <div className="text-center mt-2">
                        <Button type="submit">
                            Analyze
                        </Button>
                    </div>
                </Form>
            </Card.Body>
            
            <div className="w-100 text-center mt-2">
                Go back to <Link to="/">dashboard</Link>
            </div>
        </Card>
    )
}

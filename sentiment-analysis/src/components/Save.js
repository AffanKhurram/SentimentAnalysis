import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Card } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Dashboard.css'

export default function Save() {
    const { color, getColor, getReviews } = useAuth()
    const [text, setText] = useState('')
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

    getReviews()
        .then(function (r) {
            var t = ""
            console.log(r)
            for (var i = 0; i < r.length; i++) {
                t += 'original text: ' + r[i].text + '\n'
                t += 'positive: ' + r[i].positive.join(', ') + '\n'
                t += 'negative: ' + r[i].negative.join(', ') + '\n'
                t += 'score: ' + r[i].score + '\n\n'
            }
            setText(t)
        })

    return (
        <MuiThemeProvider theme={themeDark}>
            <Card>
                <Card.Body>
                    <div className="review">
                        <div className="text">
                            Reviews: <br />
                            {text}
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="text-center mt-2">
                <Button endIcon={<ArrowForwardIosIcon />} component={Link} size="small" to="/" variant="contained" color="primary">
                    Dashboard
                </Button> <br /><br />
            </div>
            <CssBaseline />
        </MuiThemeProvider>
    )
}

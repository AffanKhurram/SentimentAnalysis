/**
 * The main page for our app
 * Has links to login page, sign up page, and word processing page
 * redirects user if the user is already loggedin
 *
 * 1.1.0
 * 11/3/21
 */
 
 
 import React, { useEffect } from 'react'
 //import { Button } from 'react-bootstrap'
 import { Link } from 'react-router-dom'
 import { useAuth } from '../contexts/AuthContext'
 import { useNavigate } from 'react-router'
 import './Dashboard.css'
 import Button from '@material-ui/core/Button'
 import InputIcon from '@material-ui/icons/Input'
 import SaveIcon from '@material-ui/icons/Save'
 import Paper from '@material-ui/core/Paper'
 import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
  
  
  
 export default function Dashboard() {
     const { currentUser } = useAuth()
     const navigate = useNavigate()
  
     // If logged in, then redirect to LoggedInDashboard
     useEffect(function() {
             if (currentUser) {
                 navigate("/loggedindashboard", [currentUser])
             }
         }, [currentUser, navigate])
  
        
     // Return the layout of the page
     return (
       
         <div>
             
             <img alt = "not found" src="MainProjPic.png" />
           
             <h1 className="header">Review Busters</h1>
             <br></br>
                 <Button endIcon ={<InputIcon/>} size = "large" href = "/login" variant = "contained" color = "primary">
                     Login
                 </Button>    
             <br></br>
             <Button endIcon ={<InputIcon/>} size = "large" href = "/signup" variant = "contained" color = "primary">
                     signup
                 </Button>  
             <br></br>
             <Button endIcon ={<ArrowForwardIosIcon/>} size = "large" href = "/wordprocessing" variant = "contained" color = "primary">
                     wordprocessing
                 </Button>  
             <br></br>
             <Button endIcon ={<ArrowForwardIosIcon/>} size = "large" href = "/Page2" variant = "contained" color = "primary">
                     Settings
                 </Button>  
  
          
         </div>
         
     )
 }
  
 
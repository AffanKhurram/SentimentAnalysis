/**
 * Main setup for the react app
 * sets references to different pages so that we can use them throughout our project
 * 
 * 1.0.0
 * 11/3/21
 */

import React from "react"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import WordProcessing from "./WordProcessing"
import LoggedInDashboard from "./LoggedInDashboard"
import Page2 from "./Page2"
import Changepassword from "./Changepassword"
import Settings from "./Settings"
import Background from "./Background"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router basename={process.env.PUBLIC_URL}>
          <AuthProvider>
            {/* These classes that are associated with each of the paths */}
            <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/wordprocessing" element={<WordProcessing/>} />
              <Route path="/loggedindashboard" element={<LoggedInDashboard/>} />
              <Route path="/page2" element={<Page2/>} />
              <Route path="settings" element={<Settings />} />
              <Route path="changepassword" element={<Changepassword />} />
              <Route path="backgroundcolor" element={<Background />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App

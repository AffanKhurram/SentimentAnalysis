import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'

export default function Page1() {
    const [user, load, err] = useAuthState(auth)
    const navigate = useNavigate()
    
    async function logout() {
        auth.signOut()
            .then(function (res) {
                navigate("/")
            })
            .catch(function (err) {
                console.log(err)
            })
            
    }


    return (
        <div>
            Logged in as
            <div>{user?.email}</div>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    )
}

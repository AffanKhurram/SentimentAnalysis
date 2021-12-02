/**
 * A newer way to organize our authentication methods
 * This will create helper sign in and sign up functions so that we don't rewrite
 * the same code for trhe other pages
 * TODO: Create login helper function and signout helper function
 * 
 * 1.0.0
 * 11/6/21
 */
import { set, ref, get } from '@firebase/database'
import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase.js'

const AuthContext = React.createContext()

// Function that everything uses to reference this context
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState("#232f3e")

    // Calls the signup function on the database
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    // Calls the login function on the database
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    // Signs out the current user
    function signOut() {
        if (currentUser) {
            auth.signOut()
        }
    }
    // Updates the password
    function changePassword(newPassword) {
        if (currentUser) {
            return auth.currentUser.updatePassword(newPassword)
        }
    }
    // user data
    function changeColor(new_color, email) {
        if (currentUser) {
            set(ref(db, 'users/' + email), {
                color: new_color
            })
            setColor(new_color)
        }
    }
    async function saveReview(review) {
        if (currentUser) {
            var reviews_json;
            var test = await get(ref(db, 'users/' + currentUser.email.replace('.', '')))
            if (test.val()) {
                var reviews = JSON.parse(test.val().reviews)
                reviews.push(review)
                console.log(reviews)
                reviews_json = JSON.stringify(reviews)
            }
            else {
                reviews_json = JSON.stringify([review])
            }
            set(ref(db, 'users/' + currentUser.email.replace('.', '')), {
                reviews: reviews_json
            })
        }
    }
    async function getReviews() {
        var reviews = []
        if(currentUser) {
            // get(ref(db, 'users/' + currentUser.email.replace('.', '')))
            //     .then(function (snapshot) {
            //         reviews = JSON.parse(snapshot.val().reviews)
            //         console.log('inside func', reviews)
            //     })
            //     .catch(function (err) {
                    
            //     })
            var test = await get(ref(db, 'users/' + currentUser.email.replace('.', '')))
            if (test.val().reviews) {
                reviews = JSON.parse(test.val().reviews)
            }
            else {
                reviews = []
            }
        }
        return reviews
    }
    // get color data
    function getColor() {
        if (currentUser) {
            get(ref(db, 'users/' + currentUser.email.replace('.', '')))
                .then(function (snapshot) {
                    var color = snapshot.val().color
                    // console.log('color in function ', color, typeof color)
                    setColor(color)
                })
                .catch(function (err) {
                    setColor("#232f3e")
                })
        }
        else {
            setColor("#232f3e")
        }
    }

    useEffect(() => {
        // Updates the state of the current user (whether or not they are signed in)
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    // Functions and variables that other componenents will need access to
    const value = {
        currentUser,
        color,
        signup,
        login,
        signOut,
        changePassword,
        changeColor,
        getColor,
        saveReview,
        getReviews
    }

    // Return the context, providing the values that everything should be able to use
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

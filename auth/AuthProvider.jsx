import { onAuthStateChanged } from "firebase/auth"
import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase/firebaseInit"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
    })

    return(
        <AuthContext.Provider
            value={ {currentUser} }
        >
            { children }
        </AuthContext.Provider>
    )
}
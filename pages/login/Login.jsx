import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/AuthProvider"
import { auth } from "../../firebase/firebaseInit"
import Admin from "../admin/Admin"

/**
 * @param   
 * @returns Component
 */
const Login = props => {

    const nav = useNavigate()
    const [logged, setLogged] = useState(false)

    const handleSumbit = e => {
        e.preventDefault()
        const form = e.target

        const email = form['email'].value
        const password = form['password'].value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                setLogged(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user && !user.isAnonymous){
                setLogged(true)
            }
        })
    }, [logged])
    
    return !logged ? (
        <form action="" onSubmit={handleSumbit}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
    ) : (
        <Admin setLogged={ setLogged } />
    )
}

export default Login
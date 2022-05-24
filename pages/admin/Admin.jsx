import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase/firebaseInit"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../auth/AuthProvider"
import { useEffect } from "react"

/**
 * @param   
 * @returns Component
 */
const Admin = props => {
    
    const nav = useNavigate()
    const { currentUser } = useContext(AuthContext)

    const logout = () => {
        signOut(auth).then(() => {
            props.setLogged(false)
            nav("/admin")
        })
    }

    return(
        <>
            <h1>Admin</h1>
            <button onClick={logout}>salir</button>
        </>
    )
}

export default Admin
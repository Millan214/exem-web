import { useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import Admin from "../pages/admin/Admin"
import Login from "../pages/login/Login"
import { AuthContext } from "./AuthProvider"

/**
 * @param   
 * @returns Component
 */
const Protegido = props => {
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        //<Navigate to={"/login"}/>
    })

    return(
        (!!currentUser && !currentUser.isAnonymous) ? (
            <Admin {...props}/>
        ) : (
            <Navigate to="/login" />
        )
    )
}

export default Protegido
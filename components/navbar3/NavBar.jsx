import anime from "animejs"
import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { ScrollOffsetContext } from "../../pages/App"
import OpenIcon from "../icons/OpenIcon"
import X from "../icons/X"
import NavBarLink from "./NavBarLink"
import { AuthContext } from "../../auth/AuthProvider"
import ExemTextIcon from "../icons/ExemTextIcon"

const SNavBar = styled.nav`
    background: var(--color6);
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 50px;
    padding: 10px;

    position: fixed;
    top: 0;
    
    width: 100%;
    box-sizing: border-box;
    z-index: 1;

    transition: transform .5s;
    
    z-index: 100;
`

const SNavBarLeft = styled.div`
    display: flex;
`

const SNavBarCenter = styled.div`
    display: flex;
    gap: 20px;

    @media (min-width: 1000px) {
        transform: translateX(0) !important;
    }

    @media (max-width: 1000px) {
        position: fixed;
        width: 400px;
        flex-direction: column;

        height: 100vh;

        padding: 20px;
        padding-top: 40px;
        padding-right: 40px;

        & div {
            margin: 0;
            margin-bottom: 10px;
        }

        background: var(--color5);
        border-left: 10px solid var(--color6);

        transform: translateX(100%);

        right: 0;
        top: 0;
    }

    @media (max-width: 450px) {
        border: none;
        width: 100%;
        padding: 20px;
        padding-right: 40px;
        box-sizing: border-box;
        margin: 0;
    }

`

const SNavBarRight = styled.div`
    display: flex;
`

const SCloseIcon = styled.div`
    display: flex;
    transition: transform .5s;

    @media (max-width: 1000px) {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    @media (min-width: 1000px) {
        display: none;
    }

    &:hover {
        transform: rotate(90deg);
    }

    svg {
        fill: var(--font-color-light);
    }
`

const SOpenIcon = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 20px;

    @media (min-width: 1000px) {
        display: none;
    }

`

// <MainIcon fill="#632F19" />

const NavBar = () => {

    const location = useLocation()
    const { currentUser } = useContext(AuthContext)

    const offset = useContext(ScrollOffsetContext)

    const openSidebar = () => {
        anime({
            targets: '#navBarCenter',
            translateX: '100%',
            easing: 'easeInOutQuad'
        })
    }
    
    const closeSidebar = () => {
        anime({
            targets: '#navBarCenter',
            translateX: '0',
            easing: 'easeInOutQuad'
        })
    }
    
    return (
        <SNavBar { ...offset } location = { location.pathname } >
            <SNavBarLeft>
                <Link to="/">
                    <ExemTextIcon/>
                </Link>
            </SNavBarLeft>
            <SNavBarCenter id="navBarCenter">
                <SCloseIcon onClick={ () => openSidebar() }>
                    <X />
                </SCloseIcon>
                <NavBarLink to="/"
                    desplegable = {<>
                        <Link to="/formacion/cursos">cursos</Link>
                        <Link to="/formacion/talleres">talleres</Link>
                    </>}
                >
                    formaci??n
                </NavBarLink>
                <NavBarLink to="/"
                    desplegable = {<>
                        <Link to="/servicios/masajes-profesionales">masajes profesionales</Link>
                        <Link to="/servicios/masajes-alumnos">masajes alumnos</Link>
                        <Link to="/servicios/actividades">actividades</Link>
                    </>}
                >
                    servicios
                </NavBarLink>

                <NavBarLink to="/">contacto</NavBarLink>

                <NavBarLink to="/quienes-somos">??quienes somos?</NavBarLink>

            </SNavBarCenter>

            <SNavBarRight>
                <NavBarLink to="/admin">soy excelente</NavBarLink>
                <SOpenIcon onClick={ () => closeSidebar() }>
                    <OpenIcon />
                </SOpenIcon>
            </SNavBarRight>
            
        </SNavBar>
    )
}

export default NavBar
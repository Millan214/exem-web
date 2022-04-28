import anime from "animejs"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ScrollOffsetContext } from "../../pages/App"
import OpenIcon from "../icons/OpenIcon"
import X from "../icons/X"
import NavBarLink from "./NavBarLink"

const SNavBar = styled.nav.attrs(props => ({
    style: {
        background: `rgba(137, 75, 49,${ props.offset/1000 })`
    }
}))`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    position: fixed;
    top: 0;
    background-color: transparent;
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
        <SNavBar { ...offset } >
            <SNavBarLeft>
                <NavBarLink to="/">exem</NavBarLink>
            </SNavBarLeft>
            <SNavBarCenter id="navBarCenter">
                <SCloseIcon onClick={ () => openSidebar() }>
                    <X />
                </SCloseIcon>
                <NavBarLink to="/"
                    desplegable = {<>
                        <Link to="/">cursos</Link>
                        <Link to="/">talleres</Link>
                    </>}
                >
                    formación
                </NavBarLink>
                <NavBarLink to="/">servicios</NavBarLink>
                <NavBarLink to="/">productos</NavBarLink>
                <NavBarLink to="/">¿quienes somos?</NavBarLink>
            </SNavBarCenter>
            <SNavBarRight>
                <NavBarLink to="/">enlace</NavBarLink>
                <SOpenIcon onClick={ () => closeSidebar() }>
                    <OpenIcon />
                </SOpenIcon>
            </SNavBarRight>
        </SNavBar>
    )
}

export default NavBar
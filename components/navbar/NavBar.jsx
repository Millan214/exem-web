import { useContext } from "react"
import styled from "styled-components"
import { ScrollOffsetContext } from "../../pages/App"
import NavBarLink from "./NavBarLink"

const scrollBg = ( offset ) => {
    if ( offset > 800 ) return `var(--color7)`
    return 'none'
}

const SNavBar = styled.nav`
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

    background: ${ props => scrollBg(props.offset) };
    transition: background 1s;
`

const SNavBarLeft = styled.div`
    display: flex;
`

const SNavBarCenter = styled.div`
    display: flex;
`

const SNavBarRight = styled.div`
    display: flex;
`
// <MainIcon fill="#632F19" />

const NavBar = () => {

    

    const offset = useContext(ScrollOffsetContext)

    return (
        <SNavBar offset={ offset }>
            <SNavBarLeft>
                <NavBarLink to="/">enlace</NavBarLink>
            </SNavBarLeft>
            <SNavBarCenter>
                <NavBarLink to="/">formación</NavBarLink>
                <NavBarLink to="/">servicios</NavBarLink>
                <NavBarLink to="/">productos</NavBarLink>
                <NavBarLink to="/">¿quienes somos?</NavBarLink>
            </SNavBarCenter>
            <SNavBarRight>
                <NavBarLink to="/">enlace</NavBarLink>
            </SNavBarRight>
        </SNavBar>
    )
}

export default NavBar
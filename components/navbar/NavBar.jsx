import styled from "styled-components"
import NavBarLink from "./NavBarLink"

const SNavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    box-shadow: var(--shadow);
    position: fixed;
    top: 0;
    background-color: transparent;
    width: 100%;
    z-index: 1;
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

const NavBar = ({isScrolling}) => {
    return (
        <SNavBar className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
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
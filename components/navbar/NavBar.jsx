import styled from "styled-components"
import NavBarLink from "./NavBarLink"

const SNavBar = styled.nav`
    background: var(--color1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    box-shadow: var(--shadow);
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
    return (
        <SNavBar>
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
import styled from "styled-components"
import MainIcon from "../icons/MainIcon"
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

`

const SNavBarCenter = styled.div`

`

const SNavBarRight = styled.div`

`
// <MainIcon fill="#632F19" />

const NavBar = () => {
    return (
        <SNavBar>
            <SNavBarLeft>
            </SNavBarLeft>
            <SNavBarCenter>
                <NavBarLink to="/">enlace</NavBarLink>
            </SNavBarCenter>
            <SNavBarRight>
                <NavBarLink to="/">enlace</NavBarLink>
            </SNavBarRight>
        </SNavBar>
    )
}

export default NavBar
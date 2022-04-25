import styled from "styled-components"
import MainIcon from "../icons/MainIcon"
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

`

const SNavBarCenter = styled.div`

`

const SNavBarRight = styled.div`

`
// <MainIcon fill="#632F19" />

const NavBar = ({isScrolling}) => {
    return (
        <SNavBar className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
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
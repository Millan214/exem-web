import styled from "styled-components"
import { Link } from "react-router-dom";

const SNavBarLinkUnderline = styled.hr`
    margin: 0;
    border: none;

    height: 2px;
    width: 0;

    background-color: var(--font-color-light);

    transition: width .25s;
`

const SNavBarLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: var(--font-color-light);
    text-transform: uppercase;
    display: flex;
`

const SNavBarLinkWrapper = styled.div`
    margin: 0 10px;
    &:hover ${SNavBarLinkUnderline}{
        width: 100%;
    }
`

const NavBarLink = props => {
    return(
        <SNavBarLinkWrapper>
            <SNavBarLink as={ Link } { ...props }>
                { props.children }
            </SNavBarLink>
            <SNavBarLinkUnderline />
        </SNavBarLinkWrapper>
    )
}

export default NavBarLink
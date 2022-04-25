import styled from "styled-components"
import { Link } from "react-router-dom";

const SNavBarLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: var(--font-color-dark);
    text-transform: uppercase;
`

const NavBarLink = props => {
    return(
        <SNavBarLink as={ Link } { ...props }>
            { props.children }
        </SNavBarLink>
    )
}

export default NavBarLink
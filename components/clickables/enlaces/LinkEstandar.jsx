import styled from "styled-components"

const SLinkEstandar = styled.a`
    cursor: pointer;
    transition: transform .1s, color .4s;

    &:hover{
        color: var(--secundario-light);
    }

    &:active{
        transform: translateY(2px);
    }
`

/**
 * @param   
 * @returns Component
 */
const LinkEstandar = props => {
    return(
        <SLinkEstandar { ...props } >
            { props.children }
        </SLinkEstandar>
    )
}

export default LinkEstandar
import styled from "styled-components"

const SEnlace = styled.a`
    outline: none;
    border: none;
    background: var(--secundario-light);
    color: var(--color1);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;

    transition: transform .1s, background .4s;

    &:hover{
        background: var(--secundario);
    }

    &:active{
        transform: translateY(2px);
    }
`

/**
 * @param   
 * @returns Component
 */
const Enlace = props => {
    return(
        <SEnlace { ...props } >
            { props.children }
        </SEnlace>
    )
}

export default Enlace
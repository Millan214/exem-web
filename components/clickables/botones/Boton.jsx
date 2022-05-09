import styled from "styled-components"

const Boton = styled.button`
    outline: none;
    border: none;
    background: var(--secundario-light);
    color: var(--color1);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    font-size: 20px;
    cursor: pointer;

    ${props => props.flat ? `border-radius: 0; box-shadow: none`:``};
    ${ props => props.borderBottom ? `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px` : ``};
    ${ props => props.fullWidth ? `width: 100%` : ``};

    transition: transform .1s, background .4s;

    &:hover{
        background: var(--secundario);
    }

    &:active{
        transform: translateY(2px);
    }
`

export default Boton
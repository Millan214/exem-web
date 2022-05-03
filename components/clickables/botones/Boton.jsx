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

    transition: transform .1s, background .4s;

    &:hover{
        background: var(--secundario);
    }

    &:active{
        transform: translateY(2px);
    }
`

export default Boton
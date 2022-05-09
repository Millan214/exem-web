import React from 'react'
import styled from "styled-components"
import { MensajeFooter } from '../footer/Footer';


const SInput = styled.input`
    height: 20em;
`
const SError = styled.p`
  
`;

const BotonForm = styled.button`
    outline: none;
    border: none;
    background: var(--color2);
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

const ContainerForm = styled.div`
  padding: 20%;

`;

const Formulario = () => {
  return (
    <div>
    <form id="form" >
        <MensajeFooter id="mensaje1" value="Nombre"/>
        <MensajeFooter id="mensaje2" value="Apellidos"/>
        <MensajeFooter id="mensaje3" value="Email"/>
        <MensajeFooter id="mensaje4" value="Teléfono"/>
        <BotonForm>SOLICITAR INFORMACIÓN</BotonForm>
    </form>
  </div>
  )
}

export default Formulario
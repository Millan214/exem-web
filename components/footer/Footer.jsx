import styled from "styled-components"
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import React from "react";
import Boton from "../clickables/botones/Boton"

const SFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 100px;
`

const SFooterBody = styled.div`
    background: var(--color2);
    text-align: center;
    display: flex;
`

const SFooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 75px;
    grid-gap: 5px;
    align-items: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Item = styled.div`
    padding: .5rem;
   /* Arriba | Derecha | Abajo | Izquierda */
    margin: 0px 3em 1em 3em;
    grid-auto-rows: 100px;
    grid-gap: 10px;
    text-align: left;
    display: inline-block;
    align-items: center;
    line-height : 2em;
`

export const MensajeFooter = styled.input`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 20em;
`;

/*Enviar mensaje a WhatsApp de la empres (de momento es mi tlf)*/
function handleSubmit(e) {
    e.preventDefault();
    let mensaje = document.getElementById("mensaje").value
  
    let URL= `https://api.whatsapp.com/send?phone=647804790&text=${mensaje}`
    window.open(URL, "_blank");
}

const Footer = props => {
    return (
        <SFooter>
            <svg  viewBox="0 0 1920 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 189.182V234H0L0.000134665 173.485C335 83.5121 403.006 218.62 767.5 173.485C1022.5 141.907 1425 92.0933 1920 189.182Z" fill="var(--color2)"/>
            </svg>
            <SFooterBody>
                { props.children }
                <SFooterWrapper>
                    <Item>
                        <h3>CONTACTO</h3>
                    
                        <a href="tel:+34911386587">911 386 587</a>
                       
                        <a href="tel:+34606989398">606 989 398</a>
                    </Item>
                    <Item>
                        <p>Dirección: C. de Ercilla, 47, 28005 Madrid</p>
                    </Item>
                    <Item>
                        <h3>HORARIO DE RECEPCIÓN</h3>
                        <p>LUNES A VIERNES:	10 a 14:30h - 16 a 21h
                        SÁBADO:	10 a 19h</p>
                        <p>FESTIVOS: Consultar</p>
                    </Item>
                    <Item>
                        <p>¡Síguenos! 
                            <FaInstagram/>                        
                            <FaFacebookSquare/>
                        </p>
                    </Item>
                    <Item>
                        <p>Suscríbete a nuestro Newsletter para poder recibir la información
                            más reciente sobre los cursos, talleres, promociones, etc.</p>
                            <form id="form" onSubmit={handleSubmit}>
                                <MensajeFooter id="mensaje" value="Hola quiero saber más..."/>
                                <Boton>Enviar</Boton>
                            </form>
                        <FaWhatsapp/>
                    </Item>
                </SFooterWrapper>
            </SFooterBody>
        </SFooter>
    )
}

export default Footer
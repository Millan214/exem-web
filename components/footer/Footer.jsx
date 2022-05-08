import styled from "styled-components"
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import React from "react";
import Boton from "../clickables/botones/Boton"
import Map from "./Map";
import Marg from "../layouts/Marg";
import { Link } from "react-router-dom";

const SFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 100px;
    font-size: 1.2em;

    @media only screen and (max-width: 77.5rem /*1240px*/ ) {
        font-size: 0.9em; 
    }
`

const SFooterBody = styled.div`
    background: var(--color2);
    display: flex;
`

const SFooterWrapper = styled.div`
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    @media only screen and (min-width: 29.8125rem /*477px*/) {
        justify-content: space-between;
    }

`

const Item = styled.div`
    padding: .5rem;
   /* Arriba | Derecha | Abajo | Izquierda */
    margin: 0px 3em 1em 3em;
    text-align: left;
    /*display: inline-block;*/
    align-items: center;
    line-height : 2em;
`

export const MensajeFooter = styled.input`
  width: 20em;
`;

export const Checkbox = styled.input`

`;

export const Error = styled.p`
  
`;

const FooterLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: black;
    text-transform: uppercase;
    display: flex;
    cursor: pointer;

`

const SFooterLinkUnderline = styled.hr`
    margin: 0;
    border: none;

    height: 2px;
    width: 0;

    background-color: black;

    transition: width .25s;
`

const CheckboxText = styled.p`
    display: inline;
`

const styleIcons = { fontSize: "1.5em" }

/*Enviar mensaje a WhatsApp de la empresa si se aceptan los terminos (de momento es mi tlf)*/
function handleSubmit(e) {
    e.preventDefault();
    let mensaje = document.getElementById("mensaje").value
    let error = document.getElementById("error")

    if (e.target["aceptarTerminos"].checked) {
        let URL= `https://api.whatsapp.com/send?phone=647804790&text=${mensaje}`
        window.open(URL, "_blank");
        error.innerHTML=""
    } else {
        error.innerHTML="Tienes que aceptar los términos y condiciones"
    }
}


const Footer = props => {
    return (
        <SFooter>
            <svg  viewBox="0 0 1920 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 189.182V234H0L0.000134665 173.485C335 83.5121 403.006 218.62 767.5 173.485C1022.5 141.907 1425 92.0933 1920 189.182Z" fill="var(--color2)"/>
            </svg>
            
        <SFooterBody>
                <SFooterWrapper>
                    <Item>
                        <h3>DIRECCIÓN</h3>
                        <p>C. de Ercilla, 47, 28005 Madrid</p>
                        <Map/>
                    </Item>
                    <Item>
                        <FooterLink as={Link} to="/contacto">CONTACTO</FooterLink>
                        <SFooterLinkUnderline/>
                        <FooterLink as={Link} to="tel:+34911386587">911 386 587</FooterLink>
                        <Marg props={"100vh"}/>
                        <FooterLink as={Link} to="tel:+34606989398">606 989 398</FooterLink>
                    </Item>
                    <Item>
                        <h3>HORARIO DE RECEPCIÓN</h3>
                        <p>LUNES A VIERNES:	10 a 14:30h - 16 a 21h</p>
                        <p>SÁBADO:	10 a 19h</p>
                        <p>FESTIVOS: Consultar</p>
                    </Item>
                    <Item>
                        <p>¡Síguenos! 
                            <FaInstagram style={styleIcons}/>                   
                            <FaFacebookSquare style={styleIcons}/>
                        </p>
                    </Item>
                    <Item>
                        <p>Suscríbete a nuestro Newsletter para poder recibir la información
                            más reciente sobre los cursos, talleres, promociones, etc.</p>
                            <form id="form" onSubmit={handleSubmit}>
                                <MensajeFooter id="mensaje" value="Hola quiero saber más..."/><FaWhatsapp style={styleIcons}/>
                                <Marg props={"100vh"}/>
                                <Checkbox type="checkbox" name="aceptarTerminos" id="aceptarTerminos"/>
                                <CheckboxText> Acepto los términos y condiciones</CheckboxText>
                                    <Error id="error" style={{color:"red"}}></Error>
                                <Boton>Enviar</Boton>
                            </form>
                    </Item>
                </SFooterWrapper>
        </SFooterBody>
    </SFooter>
    )
}

export default Footer
import styled from "styled-components"
import React from "react";
import Boton from "../clickables/botones/Boton"
import Map from "./Map";
import Marg from "../layouts/Marg";
import { Link } from "react-router-dom";
import { SideMarginsLayout } from "../layouts/SideMarginsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import Social from "../icons/Social.css";

const SFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 100px;
    font-size: 1.3em;

    @media only screen and (max-width: 77.5rem /*1240px*/ ) {
        font-size: 0.9em; 
    }
`

const SFooterBody = styled.div`
    background: var(--color2);
    display: flex;
`

const SFooterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    @media only screen and (min-width: 29.8125rem /*477px*/) {
        justify-content: space-between;
    }
`

const SFooterUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const SFooterLi = styled.li`
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
    list-style-type: none;
    font-size: 15px;
    display: inline-flex;
`

const Item = styled.div`
    padding: 0.7rem;
    /*Arriba | Derecha | Abajo | Izquierda*/
    margin: 0px 3em 1em 3em;
    text-align: left;
    /*display: inline-block;*/
    align-items: center;
    line-height : 2em;
`

export const MensajeFooter = styled.input`
  width: 20em;
  height: 2.4em;
  font-size: 0.8em;
`;

export const Checkbox = styled.input`

`;

export const Error = styled.p`
  
`;

const FooterLinkContainer = styled.div`
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    color: black;
    text-transform: uppercase;
    display: column;
    cursor: pointer;
`

const CheckboxText = styled.p`
    display: inline;
`
const Parrafo = styled.p`
`

const InputContainer = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
`


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
            <SideMarginsLayout> 
                <SFooterWrapper>
                    <Item>
                        <h3>DIRECCIÓN</h3>
                        <p>C. de Ercilla, 47, 28005 Madrid</p>
                        <Map/>
                    </Item>
                    <Item>
                        <FooterLinkContainer as={Link} to="/contacto">CONTACTO</FooterLinkContainer>
                        <FooterLinkContainer>
                            <a href="tel:+34911386587">911 386 587 </a>
                                <Marg props={"100vh"}/>
                            <a href="tel:+34606989398">606 989 398</a>
                        </FooterLinkContainer>
                    </Item>
                    <Item>
                        <h3>HORARIO DE RECEPCIÓN</h3>
                        <p>LUNES A VIERNES:	10 a 14:30h - 16 a 21h</p>
                        <p>SÁBADO:	10 a 19h</p>
                        <p>FESTIVOS: Consultar</p>
                    </Item>
                    <Item>
                        <Parrafo> ¡Síguenos! </Parrafo>
                        <a
                            href="http://www.instagram.com/excellenceembajadores"
                            target={"__blank"}
                            className="instagram social"
                            >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com/excellenceembajadores/"
                            target={"__blank"}
                            className="facebook social"
                            >
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a>
                    </Item>
                    <Item>
                        <p><strong>Suscríbete a nuestro Newsletter para poder recibir la información
                            más reciente sobre los cursos, talleres, promociones, etc.</strong></p>
                            
                            <form id="form" onSubmit={handleSubmit}>
                                <InputContainer>
                                    <MensajeFooter id="mensaje" placeholder="Quiero saber más sobre..."/>
                                    <FontAwesomeIcon className="whatsapp"icon={faWhatsapp} size="1x"/>
                                </InputContainer>

                                    <Marg props={"100vh"}/>
                                <Checkbox type="checkbox" name="aceptarTerminos" id="aceptarTerminos"/>
                                <CheckboxText> Acepto los términos y condiciones</CheckboxText>
                                    <Error id="error" style={{color:"red"}}></Error>
             
                                <Boton>Enviar</Boton>
                                <Marg props={"100vh"}/>
                            </form>
                    </Item>
                </SFooterWrapper>
            </SideMarginsLayout>  
        </SFooterBody>

      <section>
        <SFooterUl>
          <SFooterLi SFooterLi>© 2022 EXCELLENCE FORMACION EMBAJADORES. TODOS LOS DERECHOS RESERVADOS</SFooterLi>
          < SFooterLi><a href="#">AVISO LEGAL | </a></ SFooterLi>
          < SFooterLi><a href="#"> POLÍTICA DE COOKIES | </a></ SFooterLi>
          <SFooterLi SFooterLi><a href="#"> POLÍTICA DE DEVOLUCIÓN Y DESESTIMIENTO</a></SFooterLi>
        </SFooterUl>
      </section>

    </SFooter>
    )
}

export default Footer
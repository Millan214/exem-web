import { useEffect } from "react"
import { FlexLayout } from "../../components/layouts/FlexLayout"
import Marg from "../../components/layouts/Marg"
import { SideMarginsLayout } from "../../components/layouts/SideMarginsLayout"
import TopMarginLayout from "../../components/layouts/TopMarginLayout"
import Titulo2 from "../../components/titulos/Titulo2"
import { SCaja, SHeadImage, STitulo } from "../formacion/cursos/quiromasaje/Quiromasaje"
import Persona13 from "../../components/media/personas/Persona13.jpg"
import Persona7 from "../../components/media/personas/Persona7.jpg"
import Persona9 from "../../components/media/personas/Persona9.jpg"
import ContactoImg from "../../components/media/contactoImg.jpg"
import Quiromasajistas from "../../components/media/quiromasajistas.jpg"
import HalfLayout from "../../components/layouts/HalfLayout"
import CiruclarImage from "../../components/animations/CiruclarImage"
import Titulo from "../../components/titulos/Titulo"
import VLayout from "../../components/layouts/VLayout"
import Formulario from "../../components/formularios/Formulario"

/**
 * @param   
 * @returns Component
 */
const Contacto = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>
            <SideMarginsLayout>
                <FlexLayout column>
                    <Titulo2>exem</Titulo2>
                    <Titulo2 invert>contacto</Titulo2>
                    <Marg px="10" />
                </FlexLayout>
                <SHeadImage src={ContactoImg} alt="" />
                <Marg vh="10" />
                <HalfLayout>
                    <FlexLayout vAlign='center' hAlign='center' fullHeight>
                        <Formulario/>
                    </FlexLayout>
                    <FlexLayout hAlign='left' column fullHeight>
                        <Titulo2>Te asesoramos</Titulo2>
                        <Marg px="10" />
                        <p>
                            Dirección: C. de Ercilla, 47, 28005 Madrid
                        </p>
                        <Marg px="10" />
                        <p>
                            Es un centro donde se imparten diferentes actividades, y donde se ofrecen servicios
                            profesionales de masaje y de técnicas orientadas al bienestar físico y emocional.
                        </p>
                        <Marg px="10" />
                        <p>
                            Si eres alumno o exalumno, te ayudo en: tutor@exem.es
                            Todas las consultas que recibimos, tienen respuesta en un plazo máximo de 24-48 horas.
                        </p>
                        <Marg px="10" />
                        <p>
                            Horario de Atención al Cliente:
                            De Lunes a Viernes, de 10:00 a 20:00. Sábado, de 10:00 a 19:00h.
                            Como forma de contacto, aconsejamos el uso del correo electrónico (email) o WhatsApp.
                            Todas las consultas que recibimos, tienen respuesta en un plazo máximo de 24-48 horas.
                        </p>
                    </FlexLayout>
                </HalfLayout>


            </SideMarginsLayout>

        </TopMarginLayout>
    )
}

export default Contacto
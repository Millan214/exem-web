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
import Quienesomos from "../../components/media/quienes-somos.jpg"
import Quiromasajistas from "../../components/media/quiromasajistas.jpg"
import HalfLayout from "../../components/layouts/HalfLayout"
import CiruclarImage from "../../components/animations/CiruclarImage"
import Titulo from "../../components/titulos/Titulo"
import VLayout from "../../components/layouts/VLayout"

/**
 * @param   
 * @returns Component
 */
const QuienesSomos = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>
            <SideMarginsLayout>
                <FlexLayout column>
                    <Titulo2>exem</Titulo2>
                    <Titulo2 invert>¿quienes somos?</Titulo2>
                    <Marg px="10" />
                </FlexLayout>
                <SHeadImage src={Quiromasajistas} alt="" />
                <Marg vh="10" />
                <HalfLayout>
                    <FlexLayout vAlign='center' hAlign='center' fullHeight>
                        <CiruclarImage
                            scale={4}
                            img={Quienesomos}
                            alt="quienes somos"
                        >
                        </CiruclarImage>
                    </FlexLayout>
                    <FlexLayout hAlign='left' column fullHeight>
                        <Titulo2>descubre el equipo Exem</Titulo2>
                        <Marg px="10" />
                        <p>
                            Exem es una estructura creada y pensada para formar a
                            personas que quieran ser profesionales del fantástico mundo del masaje.
                        </p>
                        <Marg px="10" />
                        <p>
                            Es un centro donde se imparten diferentes actividades, y donde se ofrecen servicios
                            profesionales de masaje y de técnicas orientadas al bienestar físico y emocional.
                        </p>
                        <Marg px="10" />
                        <p>
                            En Exem nos esforzamos cada día en mejorar nuestras formaciones,
                            en transmitir nuestros conocimientos desde la experiencia y, en llevar a cabo y poner en práctica,
                            estudiados protocolos de actuación a nivel profesional.
                        </p>
                        <Marg px="10" />
                        <p>
                            Es una de las mejores apuestas de futuro que existen en el mercado, ya que trabajamos
                            con nuestros propios métodos de enseñanza, tras los años de experiencia que nos avalan.
                            Somos una escuela que empatiza y ayuda a sus alumnos, y les aporta todo lo necesario para conseguir
                            llegar a una meta profesional estable y de calidad.
                        </p>
                        <Marg px="10" />
                        <p>
                            Si estás pensando en querer convertirte en masajista profesional, nosotros te ayudamos y
                            te mostramos una nueva visión de futuro.
                        </p>
                    </FlexLayout>
                </HalfLayout>


            </SideMarginsLayout>

            <VLayout margTop={200} up />
            <Titulo center fullWidth>Nuestros profesores</Titulo>
            <VLayout margTop={50} up>

                <div>
                    <CiruclarImage
                        img={Persona9}
                        alt="Persona9"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Juan Manzanares</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Persona13}
                        alt="Persona13"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Luis Jimenez</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Persona7}
                        alt="Persona7"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Carlos Sanchez</h1>
                    </CiruclarImage>
                </div>


            </VLayout>
        </TopMarginLayout>
    )
}

export default QuienesSomos
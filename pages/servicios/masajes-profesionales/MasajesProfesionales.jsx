import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import Titulo2 from "../../../components/titulos/Titulo2"
import Person from '../../../components/media/person.jpg';
import VLayout from "../../../components/layouts/VLayout";
import { useEffect } from "react";
import Titulo from "../../../components/titulos/Titulo";
import Subtitulo from "../../../components/titulos/Subtitulo";
import { SideMarginsLayout } from "../../../components/layouts/SideMarginsLayout";
import Marg from "../../../components/layouts/Marg";
import Boton from "../../../components/clickables/botones/Boton";
import { STarjetaHorario, STitulo } from "../../formacion/cursos/quiromasaje/Quiromasaje";


/**
 * @param   
 * @returns Styled Component
 */
const MasajesProfesionales = props => {

    useEffect(() => {
        //window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>

            <FlexLayout vAlign='center' hAlign='center' column>
                <Titulo2 pad={90} >
                    servicios
                </Titulo2>
                <Titulo2 pad={90} invert >
                    masajes profesionales
                </Titulo2>
            </FlexLayout>

            <VLayout margTop={100} up>

                <div>
                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Person}
                        alt="person"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>
                </div>


            </VLayout>

            <Marg px={100} />

            <FlexLayout hAlign="center">
                <SideMarginsLayout>
                    <Titulo>catálogo de masajes</Titulo>
                    <FlexLayout vAlign="center" hAlign="between" gap={20}>
                        <Subtitulo>¡descárgalo AHORA!</Subtitulo>
                        <Boton>Descargar</Boton>
                    </FlexLayout>
                </SideMarginsLayout>
            </FlexLayout>

            <Marg px={100} />

            <FlexLayout screenHeight vAlign='center' column>
                <FlexLayout column vAlign="center">
                    <Titulo center fullWidth>reserva tu experiencia con nosotros</Titulo>
                    <Marg px={25} />
                    <Titulo2 invert center fullWidth upper>tarifas</Titulo2>
                    <Marg px={10} />
                    <FlexLayout hAlign='center' fullWidth gap={15}>

                        <STarjetaHorario>
                            <div>
                                masaje 30 minutos
                            </div>
                            <p>
                                <p>
                                    19€
                                </p>
                                Incluidos todos los masajes del catálogo excepto: Balinés, maderoterapia, piedras calientes y tailandés
                            </p>
                            <Boton flat fullWidth borderBottom>Reservar</Boton>
                        </STarjetaHorario>

                        <STarjetaHorario>
                            <div>
                                masaje 1 hora
                            </div>
                            <p>
                                <p>
                                    35€
                                </p>
                                Incluidos todos los masajes del catálogo excepto: Balinés, maderoterapia, piedras calientes y tailandés
                            </p>
                            <Boton flat fullWidth borderBottom>Reservar</Boton>
                        </STarjetaHorario>

                        <STarjetaHorario>
                            <div>
                                masaje 90 minutos
                            </div>
                            <p>
                                <p big>
                                    45€
                                </p>
                                Incluidos todos los masajes del catálogo excepto: Balinés, maderoterapia, piedras calientes y tailandés
                            </p>
                            <Boton flat fullWidth borderBottom>Reservar</Boton>
                        </STarjetaHorario>
                    </FlexLayout>

                    <Marg vh={5} />

                    <Titulo2 invert center fullWidth upper>bonos</Titulo2>
                    <Marg px={10} />
                    <FlexLayout hAlign='center' fullWidth gap={15}>

                        <STarjetaHorario>
                            <div>
                                bono 5 sesiones
                            </div>
                            <p>
                                <p>
                                    165€
                                </p>
                                Incluidos todos los masajes del catálogo excepto: Balinés, maderoterapia, piedras calientes y tailandés
                            </p>
                            <Boton flat fullWidth borderBottom>Reservar</Boton>
                        </STarjetaHorario>

                        <STarjetaHorario>
                            <div>
                                bono 10 sesiones
                            </div>
                            <p>
                                <p>
                                    290€
                                </p>
                                Incluidos todos los masajes del catálogo excepto: Balinés, maderoterapia, piedras calientes y tailandés
                            </p>
                            <Boton flat fullWidth borderBottom>Reservar</Boton>
                        </STarjetaHorario>

                    </FlexLayout>


                </FlexLayout>

            </FlexLayout>

        </TopMarginLayout>
    )
}

export default MasajesProfesionales
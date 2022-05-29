import styled from "styled-components"
import { FlexLayout } from "../../../../components/layouts/FlexLayout"
import { SideMarginsLayout } from "../../../../components/layouts/SideMarginsLayout"
import TopMarginLayout from "../../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../../components/titulos/Titulo2"
import Mas3 from "../../../../components/media/mas3.jpg"
import Titulo from "../../../../components/titulos/Titulo"
import HalfLayout from "../../../../components/layouts/HalfLayout"
import CiruclarImage from "../../../../components/animations/CiruclarImage"
import Lista from "../../../../components/listas/Lista"
import ListaItem from "../../../../components/listas/ListaItem"
import Subtitulo from "../../../../components/titulos/Subtitulo"
import Marg from "../../../../components/layouts/Marg"
import Boton from "../../../../components/clickables/botones/Boton"
import VLayout from "../../../../components/layouts/VLayout"
import Deportivo from '../../../../components/media/deportivo.jpg';
import Reflexologia from '../../../../components/media/reflexologia1.jpg';
import { Link } from "react-router-dom"

export const STitulo = styled.h1`
    margin: 0;
    text-transform: uppercase;
    color: var(--color7);
`

export const STitulo2 = styled.h2`
    font-size: 30px;
    margin: 0;
    color: var(--color6);
`

export const SHeadImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 15px;
    padding: 10px;

    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    box-shadow: var(--shadow);
`

export const SCaja = styled.div`
    background-color: var(--color1);
    padding: 10px;
    border-radius: 15px;
    box-shadow: var(--shadow);
    width: 30%;
    height: 150px;
    transform: translateY(75%);
    overflow: hidden;

    div {
        background-color: var(--color2);
        padding: 5px 10px;
        border-radius: 7.5px;
        box-shadow: var(--shadow);
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--color7);
    }

    p{
        font-weight: bold;
        color: var(--color7);
    }
`

export const STarjetaHorario = styled.div`
    background-color: var(--color1);
    box-shadow: var(--shadow);
    width: 300px;

    border-radius: 10px;

    div {
        background-color: var(--color6);
        color: var(--color1);
        text-align: center;
        font-size: 20px;
        padding: 10px 30px;
        border-radius: 7.5px;
        box-shadow: var(--shadow);
        margin-bottom: 5px;
        text-transform: uppercase;
        font-weight: bold;
    }

    p{
        padding: 10px 20px;
        color: var(--color7);

        p{
            font-weight: bold;
            padding: 0;
            color: var(--color7);
            text-transform: uppercase;
            font-size: 25px;
        }
    }

`

export const SReservaCarta = styled.div`
    width: 300px;
    margin-top: 36px;

    p{
        color: var(--color6);
    }

    button{
        margin-top: 10px;
    }
`

/**
 * @param   
 * @returns Component
 */
const Quiromasaje = props => {
    return (
        <TopMarginLayout>
            <Marg px={20}/>
            <SideMarginsLayout>
                <>
                    <FlexLayout column>
                        <Titulo2>formación</Titulo2>
                        <Titulo2 invert>cursos</Titulo2>
                        <Marg px="10" />
                        <STitulo>quiromasaje profesional</STitulo>
                        <Marg px="10" />
                    </FlexLayout>
                    <SHeadImage src={Mas3} alt="" >
                        <FlexLayout gap={10} vAlign='bottom' hAlign='center' fullHeight>
                            <SCaja>
                                <div>
                                    duración
                                </div>
                                <p>
                                    9 meses + 3 meses opcionales de prácticas compensadas.
                                </p>
                            </SCaja>
                            <SCaja>
                                <div>
                                    modalidad del curso
                                </div>
                                <p>
                                    Presencial 100%
                                </p>
                            </SCaja>
                            <SCaja>
                                <div>
                                    formación
                                </div>
                                <p>
                                    Teórico-Práctica.<br />
                                    +220 horas de prácticas.
                                </p>
                            </SCaja>
                        </FlexLayout>
                    </SHeadImage>
                </>

                <Marg vh={5} />

                <TopMarginLayout>
                    <FlexLayout hAlign='center' vAlign='center' >
                        <FlexLayout hAlign='center' vAlign='center' column>
                            <Titulo>lo que vas a aprender</Titulo>
                            <HalfLayout wrap>

                                <FlexLayout vAlign='center' hAlign='right' fullHeight>
                                    <Lista>
                                        <ListaItem>
                                            Algunos de los módulos que aprenderás son: Quiromasaje corporal completo por zonas anatómicas.
                                            Movilizaciones articulares en tobillos, interfalángicas, rodillas, caderas, muñecas, codos y hombros, entre otras zonas del cuerpo.
                                        </ListaItem>
                                        <ListaItem>
                                            Además aprenderás estiramientos estáticos pasivos por grupos musculares y músculos específicos.
                                        </ListaItem>
                                        <ListaItem>
                                            Quiromasaje específico avanzado en diferentes alteraciones (cervical, dorsal, lumbar, ciática, para embarazadas, en la tercera edad, etc) y mucho más.
                                        </ListaItem>
                                    </Lista>
                                </FlexLayout>

                                <FlexLayout vAlign='center' hAlign='center' fullHeight>
                                    <CiruclarImage
                                        scale={4}
                                        img={Mas3}
                                        alt="Mas3"
                                    >
                                    </CiruclarImage>
                                </FlexLayout>

                            </HalfLayout>
                        </FlexLayout>
                    </FlexLayout>
                </TopMarginLayout>

                <Marg vh={5} />

                <FlexLayout screenHeight vAlign='center' column>
                    <FlexLayout column>
                        <Titulo center fullWidth>¡nos adaptamos a tus horarios!</Titulo>
                        <Marg px={5} />
                        <Subtitulo center fullWidth upper>turnos de mañana, tarde y fin de semana</Subtitulo>
                        <Marg px={10} />
                        <FlexLayout hAlign='center' fullWidth gap={15}>

                            <STarjetaHorario>
                                <div>
                                    mañanas
                                </div>
                                <p>
                                    <p>
                                        de 10:00 a 14:00
                                    </p>
                                    un dia a la semana
                                </p>
                            </STarjetaHorario>

                            <STarjetaHorario>
                                <div>
                                    tardes
                                </div>
                                <p>
                                    <p>
                                        de 16:00 a 20:00
                                    </p>
                                    un dia a la semana
                                </p>
                            </STarjetaHorario>

                            <STarjetaHorario>
                                <div>
                                    fin de semana
                                </div>
                                <p>
                                    <p>
                                        de 10:00 a 14:00
                                    </p>
                                    <p>
                                        de 15:00 a 19:00
                                    </p>
                                    un dia a la semana
                                </p>
                            </STarjetaHorario>
                        </FlexLayout>

                        <Marg vh={5} />

                        <FlexLayout gap={10} vAlign='center' hAlign='between' fullWidth>

                            <STitulo>duración</STitulo>

                            <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 77C48.7108 77 58.5035 72.9438 65.7236 65.7236C72.9438 58.5035 77 48.7108 77 38.5C77 28.2892 72.9438 18.4965 65.7236 11.2764C58.5035 4.05624 48.7108 0 38.5 0C28.2892 0 18.4965 4.05624 11.2764 11.2764C4.05624 18.4965 0 28.2892 0 38.5C0 48.7108 4.05624 58.5035 11.2764 65.7236C18.4965 72.9438 28.2892 77 38.5 77ZM43.3125 19.25C43.3125 17.9736 42.8055 16.7496 41.903 15.847C41.0004 14.9445 39.7764 14.4375 38.5 14.4375C37.2236 14.4375 35.9996 14.9445 35.097 15.847C34.1945 16.7496 33.6875 17.9736 33.6875 19.25V38.5C33.6878 39.7763 34.195 41.0001 35.0976 41.9024L48.7073 55.517C49.1544 55.9641 49.6853 56.3188 50.2695 56.5608C50.8537 56.8028 51.4798 56.9273 52.1122 56.9273C52.7445 56.9273 53.3706 56.8028 53.9548 56.5608C54.539 56.3188 55.0699 55.9641 55.517 55.517C55.9641 55.0699 56.3188 54.539 56.5608 53.9548C56.8028 53.3706 56.9273 52.7445 56.9273 52.1122C56.9273 51.4798 56.8028 50.8537 56.5608 50.2695C56.3188 49.6853 55.9641 49.1544 55.517 48.7073L43.3125 36.5076V19.25Z" fill="var(--color7)" />
                            </svg>

                        </FlexLayout>

                        <Subtitulo>
                            9 meses + 3 meses opcionales de prácticas compensadas
                        </Subtitulo>

                        <Marg vh={5} />

                        <FlexLayout gap={10} vAlign='center' hAlign='between' fullWidth>

                            <STitulo>próximas convocatorias</STitulo>

                            <svg width="30" height="30" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M77 4.81009C76.9996 3.99006 76.7896 3.18373 76.39 2.46763C75.9905 1.75153 75.4146 1.14941 74.717 0.718395C74.0194 0.28738 73.2232 0.041771 72.404 0.00487464C71.5849 -0.0320218 70.7698 0.141017 70.0363 0.507573L32.5469 19.2481H14.4375C10.6084 19.2481 6.9362 20.7692 4.22865 23.4769C1.52109 26.1845 0 29.8569 0 33.6861C0 37.5152 1.52109 41.1876 4.22865 43.8953C6.9362 46.6029 10.6084 48.124 14.4375 48.124H15.785L24.3079 73.7081C24.6272 74.6668 25.2402 75.5007 26.0599 76.0916C26.8796 76.6824 27.8645 77.0002 28.875 77H33.6875C34.9639 77 36.1879 76.493 37.0905 75.5904C37.993 74.6879 38.5 73.4637 38.5 72.1873V51.0983L70.0363 66.8645C70.7698 67.2311 71.5849 67.4041 72.404 67.3672C73.2232 67.3303 74.0194 67.0847 74.717 66.6537C75.4146 66.2227 75.9905 65.6206 76.39 64.9045C76.7896 64.1884 76.9996 63.3821 77 62.562V4.81009Z" fill="var(--color7)" />
                            </svg>

                        </FlexLayout>

                        <Subtitulo>
                            Para obtener información sobre fechas
                        </Subtitulo>

                        <Marg px={5} />

                        <Boton>Contáctanos</Boton>

                    </FlexLayout>

                </FlexLayout>

                <Titulo>¡apuntate!</Titulo>
                <Subtitulo center>
                    Reserva tu plaza...
                </Subtitulo>
                <Titulo2 center>ahora por solo 199€</Titulo2>
                <FlexLayout hAlign='between' gap={10} wrap>
                    <SReservaCarta>
                        <STitulo2>Turno Dia</STitulo2>
                        <p>
                            Este plan es incluye tanto la matrícula como el material necesario para comenzar.
                        </p>
                        <FlexLayout hAlign='right'>
                            <Boton>Reservar</Boton>
                        </FlexLayout>
                    </SReservaCarta>
                    <SReservaCarta>
                        <STitulo2>Turno Dia</STitulo2>
                        <p>
                            Este plan es incluye tanto la matrícula como el material necesario para comenzar.
                        </p>
                        <FlexLayout hAlign='right'>
                            <Boton>Reservar</Boton>
                        </FlexLayout>
                    </SReservaCarta>
                    <SReservaCarta>
                        <STitulo2>Turno Dia</STitulo2>
                        <p>
                            Este plan es incluye tanto la matrícula como el material necesario para comenzar.
                        </p>
                        <FlexLayout hAlign='right'>
                            <Boton>Reservar</Boton>
                        </FlexLayout>
                    </SReservaCarta>
                </FlexLayout>
            
                <VLayout margTop={200} up/>
                <Titulo center fullWidth>Cursos relacionados</Titulo>
                
            </SideMarginsLayout>

            <VLayout margTop={50} up>

                <div>
                <Link to="/formacion/cursos/quiromasaje">
                    <CiruclarImage
                        img={Deportivo}
                        alt="deportivo"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Deportivo profesional</h1>
                    </CiruclarImage>
                </Link>
                </div>

                <div>
                <Link to="/formacion/cursos/quiromasaje">
                    <CiruclarImage
                            img={Reflexologia}
                            alt="reflexologia"
                            scale={5}
                            hasText
                            hover
                        >
                            <h1>Reflexología podal</h1>
                    </CiruclarImage>
                </Link>
                </div>

                <div>
                <Link to="/formacion/cursos/quiromasaje">
                    <CiruclarImage
                        img={Mas3}
                        alt="Mas3"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje anticelulítico</h1>
                    </CiruclarImage>
                </Link>
                </div>


            </VLayout>
        </TopMarginLayout>
    )
}

export default Quiromasaje
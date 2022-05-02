import styled from "styled-components"
import { FlexLayout } from "../../../../components/layouts/FlexLayout"
import { SideMarginsLayout } from "../../../../components/layouts/SideMarginsLayout"
import TopMarginLayout from "../../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../../components/titulos/Titulo2"
import Mas3 from "../../../../components/media/mas3.jpg"

const STitulo = styled.h1`
    margin: 25px 0;
    text-transform: uppercase;
    color: var(--color7);
`

const STitulo2 = styled.h2`
    font-size: 30px;
    margin: 25px 0;
    color: var(--color6);
`

const Seccion = styled.section`
    margin-left: 50px;
    color: var(--color7);
    font-size: 20px;
    p{
        padding: 10px 0;
        font-weight: 600;
    }
`

const SHeadImage = styled.div`
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

const SCaja = styled.div`
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


/**
 * @param   
 * @returns Component
 */
const Quiromasaje = props => {
    return (
        <TopMarginLayout>
            <SideMarginsLayout>
                <FlexLayout column>
                    <Titulo2>formación</Titulo2>
                    <Titulo2 invert>cursos</Titulo2>
                    <STitulo>quiromasaje profesional</STitulo>
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
                <br /><br /><br />

                <TopMarginLayout>
                    <STitulo2>Lo que vas a aprender</STitulo2>
                    <Seccion>
                        <p>
                            Algunos de los módulos que aprenderás son: Quiromasaje corporal completo por zonas anatómicas.
                            Movilizaciones articulares en tobillos, interfalángicas, rodillas, caderas, muñecas, codos y hombros, entre otras zonas del cuerpo.
                        </p>

                        <p>
                            Además aprenderás estiramientos estáticos pasivos por grupos musculares y músculos específicos.
                        </p>

                        <p>
                            Quiromasaje específico avanzado en diferentes alteraciones (cervical, dorsal, lumbar, ciática, para embarazadas, en la tercera edad, etc) y mucho más.
                        </p>
                    </Seccion>
                </TopMarginLayout>

            </SideMarginsLayout>
        </TopMarginLayout>
    )
}

export default Quiromasaje
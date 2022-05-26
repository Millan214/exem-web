import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../components/titulos/Titulo2"
import Balines from '../../../components/media/balines.jpg';
import Deportivo from '../../../components/media/deportivo.jpg';
import Reflexologia from '../../../components/media/reflexologia1.jpg';
import Quiromasaje from '../../../components/media/quiromasaje1.jpg';
import Tailandes from '../../../components/media/tailandes1.jpg';
import VLayout from "../../../components/layouts/VLayout";
import { Link } from "react-router-dom"
import { useEffect } from "react";
import Onda from "../../../components/ondas/Onda";

/**
 * @param   
 * @returns Component
 */
const Cursos = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>

            <Onda>
                <FlexLayout vAlign='center' hAlign='center' column>
                    <Titulo2 pad={90} >
                        formación
                    </Titulo2>
                    <Titulo2 pad={90} invert >
                        cursos
                    </Titulo2>
                </FlexLayout>
            </Onda>

            <VLayout margTop={100} up>

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
                            img={Quiromasaje}
                            alt="quiromasaje"
                            scale={5}
                            hasText
                            hover
                        >
                            <h1>Quiromasaje Profesional</h1>
                        </CiruclarImage>
                    </Link>

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
                        img={Balines}
                        alt="balines"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje balinés</h1>
                    </CiruclarImage>
                </Link>

                <Link to="/formacion/cursos/quiromasaje">
                    <CiruclarImage
                        img={Tailandes}
                        alt="tailandes"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje tailandés tradicional</h1>
                    </CiruclarImage>
                </Link>
                </div>

            </VLayout>
        </TopMarginLayout>
    )
}

export default Cursos
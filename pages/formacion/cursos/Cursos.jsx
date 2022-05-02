import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../components/titulos/Titulo2"
import Person from '../../../components/media/person.jpg';
import VLayout from "../../../components/layouts/VLayout";
import { useEffect } from "react";

/**
 * @param   
 * @returns Component
 */
const Cursos = props => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <TopMarginLayout>
            <FlexLayout vAlign='center' hAlign='center' column>
                <Titulo2 pad = { 90 } >
                    formación
                </Titulo2>
                <Titulo2 pad = { 90 } invert >
                    cursos
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
        </TopMarginLayout>
    )
}

export default Cursos
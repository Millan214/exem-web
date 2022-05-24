import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../components/titulos/Titulo2"
import Vendaje from '../../../components/media/vendaje1.jpg';
import Piernas from '../../../components/media/piernas.jpg';
import Estiramientos from '../../../components/media/estiramientos.jpg';
import Podal from '../../../components/media/podal.jpg';
import Cuello from '../../../components/media/cuello.jpg';
import Espalda from '../../../components/media/espalda.jpg';
import VLayout from "../../../components/layouts/VLayout";
import { useEffect } from "react";
import Onda from "../../../components/ondas/Onda";

/**
 * @param   
 * @returns Component
 */
const Talleres = props => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <TopMarginLayout>
            <Onda>
                <FlexLayout vAlign='center' hAlign='center' column>
                    <Titulo2 pad={90} >
                        formación
                    </Titulo2>
                    <Titulo2 pad={90} invert >
                        talleres
                    </Titulo2>
                </FlexLayout>
            </Onda>
            <VLayout margTop={100} up>

                <div>
                    <CiruclarImage
                        img={Espalda}
                        alt="espalda"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje de espalda</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Cuello}
                        alt="cuello"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje cervical, cuello y facial</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Podal}
                        alt="podal"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje podal</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Piernas}
                        alt="piernas"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Masaje de piernas</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Estiramientos}
                        alt="estiramientos"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Movilizaciones y estiramientos</h1>
                    </CiruclarImage>

                    <CiruclarImage
                        img={Vendaje}
                        alt="vendaje"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Vendaje neuromuscular (básico)</h1>
                    </CiruclarImage>
                </div>


            </VLayout>
        </TopMarginLayout>
    )
}

export default Talleres
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import Titulo2 from "../../../components/titulos/Titulo2"
import VLayout from "../../../components/layouts/VLayout";
import { useEffect } from "react";
import Onda from "../../../components/ondas/Onda";

/**
 * @param   
 * @returns Styled Component
 */
const Actividades = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>
            <Onda>
                <FlexLayout vAlign='center' hAlign='center' column>
                    <Titulo2 pad={90} >
                        servicios
                    </Titulo2>
                    <Titulo2 pad={90} invert >
                        actividades
                    </Titulo2>
                </FlexLayout>
            </Onda>
        </TopMarginLayout>
    )
}

export default Actividades
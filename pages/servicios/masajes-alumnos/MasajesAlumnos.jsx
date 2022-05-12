import { FlexLayout } from "../../../components/layouts/FlexLayout"
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import Onda from "../../../components/ondas/Onda"
import Titulo2 from "../../../components/titulos/Titulo2"

/**
 * @param   
 * @returns Styled Component
 */
const MasajesAlumnos = props => {
    return(
        <TopMarginLayout>
            <Onda>
                <FlexLayout vAlign='center' hAlign='center' column>
                    <Titulo2 pad={90} >
                        formación
                    </Titulo2>
                    <Titulo2 pad={90} invert >
                        masajes alumnos
                    </Titulo2>
                </FlexLayout>
            </Onda>
        </TopMarginLayout>
    )
}

export default MasajesAlumnos
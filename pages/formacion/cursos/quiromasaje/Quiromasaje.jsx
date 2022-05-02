import { FlexLayout } from "../../../../components/layouts/FlexLayout"
import { SideMarginsLayout } from "../../../../components/layouts/SideMarginsLayout"
import TopMarginLayout from "../../../../components/layouts/TopMarginLayout"
import Titulo2 from "../../../../components/titulos/Titulo2"

/**
 * @param   
 * @returns Component
 */
const Quiromasaje = props => {
    return(
        <TopMarginLayout>
            <SideMarginsLayout>
                <FlexLayout column>
                    <Titulo2>formación</Titulo2>
                    <Titulo2 invert>cursos</Titulo2>
                    
                </FlexLayout>
            </SideMarginsLayout>
        </TopMarginLayout>
    )
}

export default Quiromasaje
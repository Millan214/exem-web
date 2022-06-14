import CiruclarImage from "../../../components/animations/CiruclarImage"
import { FlexLayout } from "../../../components/layouts/FlexLayout"
import HalfLayout from "../../../components/layouts/HalfLayout"
import TopMarginLayout from "../../../components/layouts/TopMarginLayout"
import Lista from "../../../components/listas/Lista"
import ListaItem from "../../../components/listas/ListaItem"
import Onda from "../../../components/ondas/Onda"
import Titulo2 from "../../../components/titulos/Titulo2"
import ImgMasajesAlumnos from "../../../components/media/imgMasajesAlumnos.jpeg"
import { SideMarginsLayout } from "../../../components/layouts/SideMarginsLayout"
import Marg from "../../../components/layouts/Marg"
import { Link } from "react-router-dom"

/**
 * @param   
 * @returns Styled Component
 */
const MasajesAlumnos = props => {
    return(
    <div>
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

<SideMarginsLayout>
    <HalfLayout wrap>
        <FlexLayout vAlign='center' hAlign='right' fullHeight>
            <Lista>
                <ListaItem>
                Estos masajes son realizados por los alumnos para poder practicar y mejorar su técnica, adquiriendo más confianza en sí mismos y siempre supervisados por el profesorado.
                </ListaItem>
                <ListaItem>
                Algunos de los cursos que impartimos son: Masaje tailandés, masaje cráneo-facial, masaje con ventosas, quiromasaje y deportivo profesional.
                </ListaItem>
            </Lista>
        </FlexLayout>

        <FlexLayout vAlign='center' hAlign='center' fullHeight>
            <CiruclarImage
                scale={4}
                img= {ImgMasajesAlumnos}
                alt="Masajes alumnos">
            </CiruclarImage>
        </FlexLayout>

    </HalfLayout>
</SideMarginsLayout>

<SideMarginsLayout>
            <Lista>
                <ListaItem>
    Para poder recibir mensajes de WhatsApp de las ofertas semanales en masajes con los alumnos en formación 
    <Link style={{color: 'var(--secundario-light)'}} to="../../formacion/cursos/quiromasaje"> pincha aquí</Link> y facilítanos tu nombre y apellidos.
                </ListaItem>
            <Marg px="10" />
                <ListaItem>
    *Ten en cuenta que son alumnos que están aprendiendo y no podrán tratar dolencias más específicas.
                </ListaItem>
            </Lista>
</SideMarginsLayout>

    </div>
    )
}

export default MasajesAlumnos
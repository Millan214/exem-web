import { useEffect } from "react"
import { FlexLayout } from "../../components/layouts/FlexLayout"
import Marg from "../../components/layouts/Marg"
import { SideMarginsLayout } from "../../components/layouts/SideMarginsLayout"
import TopMarginLayout from "../../components/layouts/TopMarginLayout"
import Titulo2 from "../../components/titulos/Titulo2"
import { SCaja, SHeadImage, STitulo } from "../formacion/cursos/quiromasaje/Quiromasaje"
import Banner from "../../components/media/banner.jpg"
import HalfLayout from "../../components/layouts/HalfLayout"
import CiruclarImage from "../../components/animations/CiruclarImage"
import Titulo from "../../components/titulos/Titulo"
import VLayout from "../../components/layouts/VLayout"

/**
 * @param   
 * @returns Component
 */
const QuienesSomos = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <TopMarginLayout>
            <SideMarginsLayout>
                <FlexLayout column>
                    <Titulo2>exem</Titulo2>
                    <Titulo2 invert>¿quienes somos?</Titulo2>
                    <Marg px="10" />
                </FlexLayout>
                <SHeadImage src={Banner} alt="" />
                <Marg vh="10" />
                <HalfLayout>
                    <FlexLayout vAlign='center' hAlign='center' fullHeight>
                        <CiruclarImage
                            scale={4}
                            img={Banner}
                            alt="person"
                        >
                        </CiruclarImage>
                    </FlexLayout>
                    <FlexLayout hAlign='left' column fullHeight>
                        <Titulo2>descubre el equipo excellence embajadores</Titulo2>
                        <Marg px="10" />
                        <p>
                            Excellence Embajadores es una estructura creada y pensada para formar a
                            personas que quieran ser profesionales del fantástico mundo del masaje.
                        </p>
                        <Marg px="10" />
                        <p>
                            Es un centro donde se imparten diferentes actividades, y donde se ofrecen servicios
                            profesionales de masaje y de técnicas orientadas al bienestar físico y emocional.
                        </p>
                        <Marg px="10" />
                        <p>

                            PAATATAAAA

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ullam iure sed iusto molestias consequuntur distinctio explicabo sint minus veritatis. Corrupti laborum, atque voluptates quam omnis maiores repellat voluptate quisquam minima, harum repudiandae eveniet asperiores rem sed eum nihil! Modi, odio? Id inventore harum esse provident dolorum dignissimos sapiente at ratione placeat beatae voluptate nostrum tenetur assumenda tempora eveniet eos tempore, magnam recusandae. Quisquam ullam, dicta doloremque earum perferendis tempore, illum ex itaque deleniti, rem nostrum delectus? Exercitationem veritatis ad illo placeat excepturi labore voluptate! Similique, laborum mollitia consequuntur facere culpa excepturi eius deserunt illo repellendus? Non corporis corrupti sint quam consequuntur, aspernatur quibusdam eveniet vel. Pariatur harum omnis facere vel quae nulla maxime autem sit quia accusamus amet, quod eveniet quos accusantium corporis, sapiente numquam, odio obcaecati modi fugit? Consequuntur eius quia similique ratione eligendi asperiores et ducimus assumenda doloremque, aut voluptatum aliquid mollitia dolorem saepe fugit repudiandae dolorum possimus modi reiciendis minima cumque sed! Doloremque recusandae quisquam animi qui, blanditiis quod non beatae iure unde, dolorem porro magnam provident eos dolore rerum ea suscipit? Molestiae illo tenetur nisi repellat eum accusantium repellendus quisquam rem doloribus qui, praesentium repudiandae iste unde eligendi, tempore aliquam consectetur distinctio ut quaerat recusandae.

                            En Excellence Embajadores nos esforzamos cada día en mejorar nuestras formaciones,
                            en transmitir nuestros conocimientos desde la experiencia y, en llevar a cabo y poner en práctica,
                            estudiados protocolos de actuación a nivel profesional.
                        </p>
                        <Marg px="10" />
                        <p>
                            Es una de las mejores apuestas de futuro que existen en el mercado, ya que trabajamos
                            con nuestros propios métodos de enseñanza, tras los años de experiencia que nos avalan.
                            Somos una escuela que empatiza y ayuda a sus alumnos, y les aporta todo lo necesario para conseguir
                            llegar a una meta profesional estable y de calidad.
                        </p>
                        <Marg px="10" />
                        <p>
                            Si estás pensando en querer convertirte en masajista profesional, nosotros te ayudamos y
                            te mostramos una nueva visión de futuro.
                        </p>
                    </FlexLayout>
                </HalfLayout>


            </SideMarginsLayout>

            <VLayout margTop={200} up />
            <Titulo center fullWidth>Nuestros profesores</Titulo>
            <VLayout margTop={50} up>

                <div>
                    <CiruclarImage
                        img={Banner}
                        alt="Banner"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Juan Manzanares</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Banner}
                        alt="Banner"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Luis Jimenez</h1>
                    </CiruclarImage>
                </div>

                <div>
                    <CiruclarImage
                        img={Banner}
                        alt="Banner"
                        scale={5}
                        hasText
                        hover
                    >
                        <h1>Carlos Sanchez</h1>
                    </CiruclarImage>
                </div>


            </VLayout>
        </TopMarginLayout>
    )
}

export default QuienesSomos
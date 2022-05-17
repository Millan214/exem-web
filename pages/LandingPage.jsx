import styled from "styled-components";
import { FlowerBox } from "../components/animations/FlowerBox";
import IntroAnimation from "../components/animations/IntroAnimation";
import { FlexLayout } from "../components/layouts/FlexLayout";
import { ScreenHeightLayout } from "../components/layouts/ScreenHeightLayout";
import { SideMarginsLayout } from "../components/layouts/SideMarginsLayout";
import coverVideo from "../components/media/coverVideo.mp4";
import Tarjeta from "../components/tarjeta/Tarjeta";
import Person from '../components/media/person.jpg';
import Espalda from '../components/media/espalda.jpg';
import Titulo from "../components/titulos/Titulo";
import TarjetaGrande from "../components/tarjeta/TarjetaGrande";
import CiruclarImage from "../components/animations/CiruclarImage";
import HalfLayout from "../components/layouts/HalfLayout";
import Lista from "../components/listas/Lista";
import ListaItem from "../components/listas/ListaItem";
import { useEffect } from "react";
import Vendaje1 from "../components/media/vendaje1.jpg";
import Formulario from "../components/formularios/Formulario";
import Marg from "../components/layouts/Marg";
import Titulo3 from "../components/titulos/Titulo3";

const SVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
  object-fit: cover;
`

const SVideoContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const TopCursos = styled.div`
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;
`

const CardContainer = styled.div`
  box-shadow: 0 15px 30px 1px var(--color3);
	overflow: hidden;
	height: 100vh;
	width: 100%;
  display: flex;
  position: relative;
  text-align: center;
`

const ImageFull = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ContenedorBanner1 = styled.div`
  position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 60%;
`

const ContenedorBanner2 = styled.div`
	display: inline-block;
	position: relative;
	overflow: hidden;
  display: inline-block;
  height: 100%;
  width: 40%;
`

const ParrafoBanner = styled.p`
	font-size: 50px;
  color: white;
  font-weight: bold;
  text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), -1px 0 black, 1px 0 black, 0 1px black, 0 -1px black;
`

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <div>
      <SVideo src={coverVideo} autoPlay loop muted />

      <SVideoContent>
        <IntroAnimation numPetalos={7} />
      </SVideoContent>

      <svg viewBox="0 0 1920 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 141V0H1920V178.5C1766.17 131.167 1365.8 57.4 995 141C624.2 224.6 177.167 175.833 0 141Z" fill="var(--color1)" />
      </svg>

      <SideMarginsLayout>
        <ScreenHeightLayout>
          <FlexLayout vAlign={'center'} hAlign={'center'} screenHeight>
            <FlexLayout hAlign={'center'} wrap>
              <FlowerBox
                content={<>
                  10
                </>}
                text={<>
                  años de experiencia
                </>}
              />
              <FlowerBox
                content={<>
                  12
                </>}
                text={<>
                  masajes distintos
                </>}
              />
              <FlowerBox
                content={<>
                  18
                </>}
                text={<>
                cursos
                </>}
              />
              <FlowerBox
                content={<>
                  99%
                </>}
                text={<>
                  de satisfacción
                </>}
              />
            </FlexLayout>
          </FlexLayout>
        </ScreenHeightLayout>
      </SideMarginsLayout>

  <ScreenHeightLayout>
    <FlexLayout>
      <CardContainer>

        <ImageFull src={Vendaje1} alt="banner" />

            <ContenedorBanner1>
              <Titulo3>PRÓXIMA CONVOCATORIA</Titulo3>
              <Titulo3>CURSO QUIROMASAJE PROFESIONAL</Titulo3>
              
              <ParrafoBanner>INICIO: 11 DE MAYO</ParrafoBanner>
            </ContenedorBanner1>

            <ContenedorBanner2>
              <Formulario/>
            </ContenedorBanner2>

      </CardContainer>
    </FlexLayout>
    </ScreenHeightLayout>


      <SideMarginsLayout>
        <FlexLayout hAlign='center' vAlign='center' screenHeight>
          <FlexLayout hAlign='center' vAlign='center' column>
            <Titulo>top cursos</Titulo>
            <HalfLayout>
              <FlexLayout vAlign='center' hAlign='right' fullHeight>
                <Lista>
                  <ListaItem>Quiromasaje profesional</ListaItem>
                  <ListaItem>Deportivo profesional</ListaItem>
                  <ListaItem>Reflexología podal</ListaItem>
                  <ListaItem>Masaje tailandés tradicional</ListaItem>
                  <ListaItem>Anticelulítico</ListaItem>
                </Lista>
              </FlexLayout>
              <FlexLayout vAlign='center' hAlign='center' fullHeight>
                <CiruclarImage
                  scale={4}
                  img={Person}
                  alt="person"
                >
                </CiruclarImage>
              </FlexLayout>
            </HalfLayout>
          </FlexLayout>
        </FlexLayout>
      </SideMarginsLayout>

      <SideMarginsLayout>
        <ScreenHeightLayout>
          <FlexLayout vAlign={'center'} hAlign={'center'} screenHeight>
            <TarjetaGrande enter={'Más información'} img={Espalda}>
              disfruta de nuestros masajes profesionales
            </TarjetaGrande>
          </FlexLayout>
        </ScreenHeightLayout>
      </SideMarginsLayout>

    <Marg props={"100vh"}/>

    <ScreenHeightLayout>
        <FlexLayout vAlign={'center'} hAlign={'center'} fullheight column>
          <Titulo>reseñas de nuestros clientes</Titulo>
          <FlexLayout hAlign={'center'} wrap>

            <Tarjeta
              imagen={Person}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Me siento muy bien atendida por parte de Jesica siempre atenta y amable.'
            />

            <Tarjeta
              imagen={Person}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

            <Tarjeta
              imagen={Person}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

            <Tarjeta
              imagen={Person}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

            <Tarjeta
              imagen={Person}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

          </FlexLayout>
        </FlexLayout>
      </ScreenHeightLayout>
         
    </div>
  );
};

export default LandingPage;

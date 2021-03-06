import styled from "styled-components";
import { FlowerBox } from "../components/animations/FlowerBox";
import IntroAnimation from "../components/animations/IntroAnimation";
import { FlexLayout } from "../components/layouts/FlexLayout";
import { ScreenHeightLayout } from "../components/layouts/ScreenHeightLayout";
import { SideMarginsLayout } from "../components/layouts/SideMarginsLayout";
import coverVideo from "../components/media/coverVideo.mp4";
import Tarjeta from "../components/tarjeta/Tarjeta";

import Persona2 from '../components/media/personas/Persona2.jpg';
import Persona3 from '../components/media/personas/Persona3.jpg';
import Persona4 from '../components/media/personas/Persona4.jpg';
import Persona5 from '../components/media/personas/Persona5.jpg';
import Persona6 from '../components/media/personas/Persona6.jpg';
import Deportivo from '../components/media/deportivo.jpg';
import Espalda from '../components/media/espalda.jpg';
import Titulo from "../components/titulos/Titulo";
import TarjetaGrande from "../components/tarjeta/TarjetaGrande";
import CiruclarImage from "../components/animations/CiruclarImage";
import HalfLayout from "../components/layouts/HalfLayout";
import Lista from "../components/listas/Lista";
import ListaItem from "../components/listas/ListaItem";
import { useEffect } from "react";
import Estiramientos from "../components/media/estiramientos.jpg";
import Formulario from "../components/formularios/Formulario";
import Marg from "../components/layouts/Marg";
import Titulo3 from "../components/titulos/Titulo3";
import { MarginTopAndBottom } from "../components/layouts/MarginTopAndBottom";

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

const SDownArrow = styled.div`
  position: absolute;
  fill: var(--color1);
  opacity: .5;
  width: 100px;
  top: 85%;
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
  /*
  @media screen and (min-width: 480px){
    box-shadow: none;
  }
  */
`

const ImageFull = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

  /*
  @media screen and (min-width: 480px){
    display: none;
  }
  */
`

const ContenedorBanner1 = styled.div`
  position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 60%;
/*
  @media screen and (min-width: 480px){
    width: 100% !important;
    text-align: center;
    position: absolute;
  }
  */
`

const ContenedorBanner2 = styled.div`
	display: inline-block;
	position: relative;
	overflow: hidden;
  height: 100%;
  width: 40%;
/*
  @media screen and (min-width: 480px){
    width: 100% !important;
    justify-content: center !important;
    margin-top: 18em;
    display: flexbox;
  }
  */
`

const ParrafoBanner = styled.p`
	font-size: 50px;
  color: white;
  font-weight: bold;
  text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), -1px 0 black, 1px 0 black, 0 1px black, 0 -1px black;
`

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <SVideo src={coverVideo} autoPlay loop muted />

      <SVideoContent>
        <IntroAnimation numPetalos={7} />
        <SDownArrow>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </SDownArrow>
      </SVideoContent>


      <MarginTopAndBottom>
        <FlexLayout vAlign={'center'} hAlign={'center'}>
          <FlexLayout hAlign={'center'} wrap>
            <FlowerBox
              content={<>
                +30
              </>}
              text={<>
                a??os de experiencia
              </>}
            />
            <FlowerBox
              content={<>
                +12
              </>}
              text={<>
                masajes distintos
              </>}
            />
            <FlowerBox
              content={<>
                +18
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
                de satisfacci??n
              </>}
            />
          </FlexLayout>
        </FlexLayout>
      </MarginTopAndBottom>

      <ScreenHeightLayout>
        <FlexLayout>
          <CardContainer>

            <ImageFull src={Estiramientos} alt="estiramientos" />

            <ContenedorBanner1>
              <Titulo3>PR??XIMA CONVOCATORIA</Titulo3>
              <Titulo3>CURSO QUIROMASAJE PROFESIONAL</Titulo3>

              <ParrafoBanner>INICIO: 25 DE JUNIO</ParrafoBanner>
            </ContenedorBanner1>

            <ContenedorBanner2>
              <Formulario />
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
                  <ListaItem>Reflexolog??a podal</ListaItem>
                  <ListaItem>Masaje tailand??s tradicional</ListaItem>
                  <ListaItem>Anticelul??tico</ListaItem>
                </Lista>
              </FlexLayout>
              <FlexLayout vAlign='center' hAlign='center' fullHeight>
                <CiruclarImage
                  scale={4}
                  img={Deportivo}
                  alt="deportivo"
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
            <TarjetaGrande link={'/servicios/masajes-profesionales'} enter={'M??s informaci??n'} img={Espalda}>
              disfruta de nuestros masajes profesionales
            </TarjetaGrande>
          </FlexLayout>
        </ScreenHeightLayout>
      </SideMarginsLayout>

      <Marg props={"100vh"} />

      <ScreenHeightLayout>
        <FlexLayout vAlign={'center'} hAlign={'center'} fullheight column>
          <Titulo>opiniones de nuestros clientes</Titulo>
          <FlexLayout hAlign={'center'} wrap>

            <Tarjeta
              imagen={Persona2}
              nombre='Lucia Navarro shh'
              correo='navarroch@gmail.com'
              comentario='Me siento muy bien atendida por parte de Jesica siempre atenta y amable.'
            />

            <Tarjeta
              imagen={Persona3}
              nombre='Guillermo Rauch'
              correo='guillermorauch@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

            <Tarjeta
              imagen={Persona4}
              nombre='Maria'
              correo='mmriagonzal19@gmail.com'
              comentario='Muy buen trato por parte de todos, y el masaje muy relajante.'
            />

            <Tarjeta
              imagen={Persona5}
              nombre='jessica ruiz'
              correo='jsdestroy@gmail.com'
              comentario='Me ha encantado la experiencia. Volver?? seguro'
            />

            <Tarjeta
              imagen={Persona6}
              nombre='Sandra Reina'
              correo='reinasandra_89@gmail.com'
              comentario='Una gran escuela y trato excelente'
            />

          </FlexLayout>
        </FlexLayout>
      </ScreenHeightLayout>

    </div>
  );
};

export default LandingPage;

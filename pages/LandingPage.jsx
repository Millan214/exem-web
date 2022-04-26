import styled from "styled-components";
import IntroAnimation from "../components/animations/IntroAnimation";
import { FlexLayout } from "../components/layouts/FlexLayout";
import { ScreenHeightLayout } from "../components/layouts/ScreenHeightLayout";
import { SideMarginsLayout } from "../components/layouts/SideMarginsLayout";
import coverVideo from "../components/media/coverVideo.mp4";

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

const CardContainer = styled.div`
  box-shadow: 0 15px 30px 1px var(--color3);
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 5em auto;
	height: 350px;
	width: 700px;
`

const TopCursos = styled.div`
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;
`

const ImgCursos = styled.div`
	transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	float: right;
	width: 50%;
	display: inline-block;
`

const LandingPage = () => {

  return (
    <>
      <SVideo src={ coverVideo } autoPlay loop muted />
      <SVideoContent>
        <IntroAnimation numPetalos = { 7 } />
      </SVideoContent>
      <svg viewBox="0 0 1920 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 141V0H1920V178.5C1766.17 131.167 1365.8 57.4 995 141C624.2 224.6 177.167 175.833 0 141Z" fill="var(--color1)"/>
      </svg>
      <SideMarginsLayout>
        <ScreenHeightLayout>
          <FlexLayout vcenter hcenter fullheight>
            <h1>jamon</h1>
          </FlexLayout>
        </ScreenHeightLayout>
        <CardContainer>	
        <TopCursos>
            <h1>Cursos más venidos</h1>
         </TopCursos>
         <ImgCursos>
            <img src="https://cdn.pixabay.com/photo/2018/11/05/09/53/massage-3795691_960_720.jpg" alt="top-cursos"/>
          </ImgCursos>
        </CardContainer>
      </SideMarginsLayout>
    </>
  );
};

export default LandingPage;

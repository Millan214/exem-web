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
      </SideMarginsLayout>
    </>
  );
};

export default LandingPage;

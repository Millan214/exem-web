import React from 'react'
import coverVideo from "../components/media/coverVideo.mp4"

const LandingPage = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>EXEM</h1>
        <p>Expertos en masaje</p>
    </div>
  )
}


export default LandingPage;
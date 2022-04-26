import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

import './styles.css';

export const ScrollOffsetContext = createContext(window.scrollY)

const App = () => {

  const [offset, setOffset] = useState(window.scrollY)
  const [scrollDir, setScrollDir] = useState('up')

  useEffect(() => {
    
    window.addEventListener('scroll', () => {
      setOffset( window.scrollY )
    })

  }, [])

  useEffect(() => {

    const threshold = 0
    let prevScroll = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY
      if( Math.abs(scrollY-prevScroll) < threshold ) {
        ticking = false
        return
      }
      setScrollDir( scrollY > prevScroll ? 'down' : 'up' )
      prevScroll = scrollY > 0 ? scrollY : 0
      ticking=false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll )

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollDir])
  

  return (
    <ScrollOffsetContext.Provider value={ { offset, scrollDir } }>
      <NavBar />
      <Outlet />
    </ScrollOffsetContext.Provider>
  );
}

export default App;

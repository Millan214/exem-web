import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

import './styles.css';

export const ScrollOffsetContext = createContext(0)

const App = () => {

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.scrollY)
    })
  }, [])
  

  return (
    <ScrollOffsetContext.Provider value={offset}>
      <NavBar />
      <Outlet />
    </ScrollOffsetContext.Provider>
  );
}

export default App;

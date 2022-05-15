import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { auth } from "../firebase/firebaseInit";
import { signInAnonymously } from "firebase/auth";

import './styles.css';
import Sala from "../components/chat/sala/Sala";

export const ScrollOffsetContext = createContext(window.scrollY)
export const UserContext = createContext(null)

const App = () => {

  const [offset, setOffset] = useState(window.scrollY)
  const [user, setUser] = useState(null)

  const anonymousLogin = () => {
    signInAnonymously(auth)
      .then((userImp) => {
        setUser(userImp.user)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {

    window.addEventListener('scroll', () => {
      setOffset(window.scrollY)
    })

    anonymousLogin()

  }, [])

  return (
    <UserContext.Provider value={{ user }}>
      <ScrollOffsetContext.Provider value={{ offset }}>
        <NavBar />
        <Outlet />
        <Sala floating />
        <Footer />
      </ScrollOffsetContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

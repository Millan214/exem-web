import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { auth, db } from "../firebase/firebaseInit";
import { signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import './styles.css';
import Sala from "../components/chat/sala/Sala";


export const ScrollOffsetContext = createContext(window.scrollY)
export const UserContext = createContext(null)

const App = () => {

  const [user, setUser] = useState(null)

  const anonymousLogin = () => {
    signInAnonymously(auth)
      .then((userImp) => {
        setUser(userImp.user)

        setDoc(doc(db, "usuarios", userImp.user.uid), {
          name: userImp.user.displayName,
        }).then((value) => {
          //console.log(value)
        })

      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    anonymousLogin()
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavBar />
      <Outlet />
      <Sala floating />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;

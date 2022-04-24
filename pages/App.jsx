import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import '../styles.css';

const App = () => {

  return (
    <>
      <NavBar>

      </NavBar>
      <Outlet />
    </>
  );
}

export default App;

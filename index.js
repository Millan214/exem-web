import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Cursos from './pages/formacion/cursos/Cursos';
import Quiromasaje from './pages/formacion/cursos/quiromasaje/Quiromasaje';
import Talleres from './pages/formacion/talleres/Talleres';
import LandingPage from './pages/LandingPage';
import Actividades from './pages/servicios/actividades/Actividades';
import MasajesAlumnos from './pages/servicios/masajes-alumnos/MasajesAlumnos';
import MasajesProfesionales from './pages/servicios/masajes-profesionales/MasajesProfesionales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>

          <Route index element={ <LandingPage /> } />

          <Route path="formacion">

            <Route path="cursos" >
              <Route index element={ <Cursos /> } />
              <Route path="quiromasaje" element={ <Quiromasaje /> }/>
            </Route>

            <Route path="talleres" element={ <Talleres /> }/>

          </Route>

          <Route path="servicios">

            <Route path="masajes-profesionales" element={ <MasajesProfesionales /> }/>

            <Route path="masajes-alumnos" element={ <MasajesAlumnos /> } />

            <Route path="actividades" element={ <Actividades /> }/>

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

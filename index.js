import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Auth, { AuthProvider } from './auth/AuthProvider';
import Protegido from './auth/Protegido';
import Admin from './pages/admin/Admin';
import App from './pages/App';
import Contacto from './pages/contacto/Contacto';
import Cursos from './pages/formacion/cursos/Cursos';
import Quiromasaje from './pages/formacion/cursos/quiromasaje/Quiromasaje';
import Talleres from './pages/formacion/talleres/Talleres';
import LandingPage from './pages/LandingPage';
import Login from './pages/login/Login';
import QuienesSomos from './pages/quienes-somos/QuienesSomos';
import Actividades from './pages/servicios/actividades/Actividades';
import MasajesAlumnos from './pages/servicios/masajes-alumnos/MasajesAlumnos';
import MasajesProfesionales from './pages/servicios/masajes-profesionales/MasajesProfesionales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>

            <Route index element={<LandingPage />} />
            
            <Route path='contacto' element={<Contacto />} />

            <Route path='quienes-somos' element={<QuienesSomos />} />

            <Route path="formacion">

              <Route path="cursos" >

                <Route index element={<Cursos />} />

                <Route path="quiromasaje" element={<Quiromasaje />} />

              </Route>

              <Route path="talleres" element={<Talleres />} />

            </Route>

            <Route path="servicios">

              <Route path="masajes-profesionales" element={<MasajesProfesionales />} />

              <Route path="masajes-alumnos" element={<MasajesAlumnos />} />

              <Route path="actividades" element={<Actividades />} />

            </Route>

          </Route>

          <Route path="/admin" element={<Login />} >
            <Route index element={<Admin />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Cursos from './pages/formacion/cursos/Cursos';
import Quiromasaje from './pages/formacion/cursos/quiromasaje/Quiromasaje';
import Talleres from './pages/formacion/talleres/Talleres';
import LandingPage from './pages/LandingPage';

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

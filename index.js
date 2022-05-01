import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Cursos from './pages/formacion/Cursos';
import Talleres from './pages/formacion/Talleres';
import LandingPage from './pages/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={ <LandingPage /> } />
          <Route path="formacion">
            <Route path="cursos" element={ <Cursos /> }/>
            <Route path="talleres" element={ <Talleres /> }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

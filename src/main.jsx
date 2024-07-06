import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="*" element={<h2>Realiza tu compra</h2>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

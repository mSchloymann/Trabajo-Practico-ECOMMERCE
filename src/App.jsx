
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { data } from "./data/productos";
import Productos from "./componentes/Productos";

function App() {
  const [user, setUser] = useState();
  return <>
  <header>
    <h1>ECOMMERCE</h1>
    <nav className="navbar">
      <NavLink to={"/"} className={({ isActive }) => (isActive ? "navbar-selected" : null)}>
      Home
      </NavLink>
      <NavLink to={"registro"}className={({ isActive }) => (isActive ? "navbar-selected" : null)}>
      Registro
      </NavLink>
      <NavLink to={"login"}className={({ isActive }) => (isActive ? "navbar-selected" : null)}>
      Login
      </NavLink>
    </nav>
  </header>
  <Outlet></Outlet>
    <section className="conteiner">
    {data.map((productos) => (
      <Productos key={`${productos.id}`} {...productos} />
    ))}
  </section>
  </>
}

export default App;

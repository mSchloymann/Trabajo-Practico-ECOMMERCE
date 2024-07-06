import React from "react";
import "./Productos.css";

function Productos({ nombre, descripcion, imagen, precio }) {

    return (
        <article className="productosCard">
            
            <img src={imagen} alt="logo" width={200}/>
            <h4>{nombre}</h4>
            <p>{precio}</p>
            <h5>Caracteristicas del Producto</h5>
            <p>{descripcion}</p>
            <button>Comprar</button>
        </article>
    );
}

export default Productos;
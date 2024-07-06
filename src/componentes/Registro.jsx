import { useState } from 'react';
import React from 'react';
import { registro } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [errorEnRegistro, setFirebaseError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirebaseError(null);
    const { email, clave } = e.target.elements;
    createUserWithEmailAndPassword(registro, email.value, clave.value)
      .then((user) => {
        const usuario = user.usuario;
        const userMessage = user.message;
        console.log(usuario);
        console.log(userMessage);
        navigate("/login");
      })
      .catch((error) => {
        const errorclave = error.clave;
        const errorMessage = error.message;
        console.error(errorclave);
        console.error(errorMessage);
        setFirebaseError(errorMessage);
      });
  };
  return <> 
    <h2>Registarte</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email 
        <input type='text' placeholder='messi@seleción.com'
        name="email" />
      </label>
      <label>
        Contraseña 
        <input type='text' placeholder='ingresa tu clave'
        name="clave" />
      </label>
      <button type='submit'>Registrarme</button> 
    </form>
    <span>{errorEnRegistro}</span>
  </>
}

export default Registro;
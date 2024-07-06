import { useState } from "react";
import React from 'react';
import { registro } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login() {
  const [firebaseError, setFirebaseError] = useState(null);
  const accedido = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirebaseError(null);
    const { email, clave } = e.target.elements;
    signInWithEmailAndPassword(registro, email.value, clave.value)
      .then((user) => {
        const usuario = user.usuario;
        console.log(usuario);
        accedido("./home");
      })
      .catch((error) => {
        const errorclave = error.clave;
        const errorMessage = error.message;
        console.error(errorclave);
        console.error(errorMessage);
        setFirebaseError(errorMessage);
      });
  }
  return <> 
    <h2>Ingresar</h2>
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
      <button type='submit'>Ingresar</button> 
      <span>{firebaseError}</span>
    </form>
  </>
}

export default Login;
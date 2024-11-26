// OtraPagina.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { RiLoginBoxLine } from "react-icons/ri";
import LoginForm from './LoginForm';

const OtraPagina: React.FC = () => {
    const [usuario, setUsuario] = useState<string>(''); // Usuario como tipo string
    const [password, setPassword] = useState<string>(''); // Contraseña como tipo string
  
    const navigate = useNavigate();

    // Función handleSubmit que se pasa a LoginForm
    const handleSubmit = (usuario: string, password: string): void => {
      console.log('Usuario:', usuario);
      console.log('Password:', password);
      // Agregar lógica del login 

      navigate('/tabla-requerimientos');
    };
  
    return (
      <>
        <RiLoginBoxLine />
        <LoginForm onSubmit={handleSubmit} />
      </>
    );
  };
  

export default OtraPagina;

import React, { useState } from 'react';
import YesButton from './YesButton';

/*
const LoginForm = ({ onSubmit }) => {
    const [usuario, setUsuario] = useState(''); 
    const [password, setPassword] = useState(''); 
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      onSubmit(usuario, password); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Usuario</label>
          <br />
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <YesButton text="Ingresar" />
      </form>
    );
  };
  
export default LoginForm;
*/

// Definir el tipo de las propiedades del componente
type LoginFormProps = {
  onSubmit: (usuario: string, password: string) => void; // onSubmit acepta dos strings
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState<string>(''); // El estado 'usuario' es un string
  const [password, setPassword] = useState<string>(''); // El estado 'password' es un string

  // Tipar el evento como 'React.FormEvent<HTMLFormElement>'
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    onSubmit(usuario, password); // Llamar a onSubmit pasando los valores de usuario y password
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <br />
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} // Tipar el evento de cambio
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Tipar el evento de cambio
        />
      </div>
      <YesButton text="Ingresar" />
    </form>
  );
};

export default LoginForm;

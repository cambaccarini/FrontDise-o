// YesButton.js
/*
import React from 'react';

const YesButton = ({ text }) => {
  return (
    <button type="submit" className="yesButton">
      {text}
    </button>
  );
};

export default YesButton;
*/
import React from 'react';

// Definir el tipo de las propiedades del componente
type YesButtonProps = {
  text: string; // 'text' debe ser una cadena de caracteres
};

// Componente funcional con los tipos especificados
const YesButton: React.FC<YesButtonProps> = ({ text }) => {
  return (
    <button type="submit" className="yesButton">
      {text}
    </button>
  );
};

export default YesButton;

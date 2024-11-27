import React from 'react';

interface ErrorPopupProps {
    message: string;
    onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
    return (
        <div className="error-popup"> 1 
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default ErrorPopup;
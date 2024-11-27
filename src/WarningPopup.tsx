import React from 'react';

interface WarningPopupProps {
    message: string;
    onClose: () => void;
}

const WarningPopup: React.FC<WarningPopupProps> = ({ message, onClose }) => {
    return (
        <div className="warning-popup">
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default WarningPopup;
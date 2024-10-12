import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className='modal-title'>{title}</h2>
                <p className='modal-text'>{message}</p>
                <button  className='modal-btn' onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal;

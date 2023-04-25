import React from "react";
import './Modal.css'

const Modal = ({onClose}) => {
    return (
        <>
            <div className="modal-wrapper" onClick={onClose}></div>
            <div className="modal">
                <h2>Modal window</h2>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>

        </>
    )
}

export default Modal;
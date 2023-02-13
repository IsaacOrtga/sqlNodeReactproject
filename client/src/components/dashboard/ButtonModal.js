import React, { useState } from "react";
import Modal from "./Modal";
import './dashboard.css';

function ButtonModal({ children, onClose }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="buttonModal">
            <p onClick={handleOpen} className="openButton">
                Añadir descripción
            </p>
            <p onClick={handleOpen} className="openButton">
                Añadir intereses
            </p>
            <Modal showModal={showModal} onClose={handleClose}>{children}</Modal>
        </div>
    );
}

export default ButtonModal;

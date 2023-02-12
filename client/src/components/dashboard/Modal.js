
import React from "react";
import './dashboard.css';

const Modal = ({closeModal, showModal}) => {
  


  if (!showModal) {
    return null;
  }

  return (
    <div>
      <div id="modal" className="modal" onClick={closeModal}>
        <div className="box" onClick={(e) => e.stopPropagation()}>
          <div>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
            <p>lorem ipsum lorem ipsum</p>
          </div>
      
          <button id="close" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;

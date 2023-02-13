import React, { useState } from "react";
import './dashboard.css';

function Modal({ showModal, children, onClose }) {
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);
  const handleChange = e => {
    if (e.target.name === "descriptionTextArea") {
      setDescription(e.target.value);
    } else if (e.target.name === "interestsTextArea") {
      setInterests([...interests, e.target.value]);
    }
  }
  return (
    <div>
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContainer">
            <div className="modalHeader">
              <h3>Háblanos de ti para conectarte mejor</h3>
              <button className="buttonInModal" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="modalBody">{children}</div>
            <label for="descriptionTextArea">Descríbete: </label>
            <textarea name="descriptionTextArea" className="modalTextArea" placeholder="Descríbete en 500 palabras" value={description} onChange={handleChange} />
            <label for="interestsTextArea">Escoge tus intereses:
              <select name="interestsTextArea" value={interests} onChange={handleChange}>
                <option value="art">Arte</option>
                <option value="music">Música</option>
                <option value="books">Libros</option>
                <option value="vegan">Vegano</option>
                <option value="food">Comida</option>
                <option value="fashion">Moda</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
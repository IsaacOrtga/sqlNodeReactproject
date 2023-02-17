import React, { useState, useEffect } from "react";
import './dashboard.css';

function Modal({ showModal, onClose, alias }) {
  const [description_u, setDescription] = useState('');
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/getUserInfo/${alias}`);
        const data = await response.json();
        if (data.description_u) {
          setDescription(data.description_u);
        }
        if (data.interests) {
          setInterests(data.interests.split(','));
        }
      } catch (error) {
        console.error('Error fetching user profile', error);
      }
    };
  
    fetchData();
  }, [alias]);
  
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "descriptionTextArea") {
      setDescription(value);
    } else if (e.target.name === "interestsSelector") {
      const interest = e.target.value;
      if (!interests.includes(interest)) {
        setInterests([...interests, interest]);
      }
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    if (description_u || interests.length > 0) {
      try {
        if (description_u) {
          await fetch(`/updateD/${alias}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description_u })
          });
        }
        if (interests.length > 0) {
          await fetch(`/updateI/${alias}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ interests })
          });
        }
        onClose();
      } catch (error) {
        console.error('Error updating user profile', error);
      }
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
            <div className="modalBody">
              <div className="descriptionContainer">
                <label htmlFor="descriptionTextArea"><b>Descríbete:</b> </label>
                <textarea maxLength="500" name="descriptionTextArea" className="modalTextArea" placeholder="500 palabras" value={description_u} onChange={handleChange} />
              </div>
              <div className="interestsContainer">
                <label htmlFor="interestsSelector"><b>Escoge tus intereses: </b>
                  <select name="interestsSelector" value="" onChange={handleChange}>
                    <option value="">Seleccione</option>
                    <option value="Arte">Arte</option>
                    <option value="Música">Música</option>
                    <option value="Libros">Libros</option>
                    <option value="Vegano">Vegano</option>
                    <option value="Comida">Comida</option>
                    <option value="Moda">Moda</option>
                    <option value="Museos">Museos</option>
                    <option value="Naturaleza">Naturaleza</option>
                  </select>
                </label>
                <p>{interests.map((interest) => <span key={interest}>{interest} </span>)}</p>
              </div>
              <input type="submit" value="Guardar" id="submitModal" className="submitModal" onClick={handleSave} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

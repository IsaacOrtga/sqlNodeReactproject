import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../navbar/Navbar';
import Modal from './Modal.js';
import imagenProfile from '../../assets/img/imgP.jpg';
import './dashboard.css';
export const Dashboard = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [alias, setAlias] = useState('');
  const cookies = new Cookies();
  const nameFromCookie = cookies.get('name_u');
  const surnameFromCookie = cookies.get('surname');
  const aliasFromCookie = cookies.get('alias');
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setName(nameFromCookie);
    setSurname(surnameFromCookie);
    setAlias(aliasFromCookie);
  },[])
  
  return (
    <>
    <Navbar user={alias} />
    <div className='dashboardGeneralContainer'>
      <div className='generalContainer'>
        <div className='profileContainer'>
          <div className='imageProfileContainer'>
            <img src={imagenProfile} alt='imageProfile' />
          </div>
          <div className='aliasContainer'>
            <h5>{alias}</h5>
          </div>
          <div className='generalInformationContainer'>
            <div className='infoProfileContainer'>
              <h6>{name} {surname}</h6>
              <p>Comentarios: Aún no tienes comentarios</p>
              <p>Favoritos: Aún no tienes favoritos</p>
              <span onClick={handleClick}>Añadir descripción</span>
              <br></br>
              <span onClick={handleClick}>Añadir preferencias</span>
            </div>
          </div>
        </div>
        <div className='commentsContainer'>
          <div className='comment'>
            <h6>La Libre:</h6>
            <p>Un lugar increíble donde tomarte algo con tu mascota. Mejor ir por la mañana o a mediodía, porque por la noche suele llenarse y convertirse en un bar de copas.</p>
          </div>
          <div className='comment'>
            <h6>La Libre:</h6>
            <p>Un lugar increíble donde tomarte algo con tu mascota. Mejor ir por la mañana o a mediodía, porque por la noche suele llenarse y convertirse en un bar de copas.</p>
          </div>
          <div className='comment'>
            <h6>La Libre:</h6>
            <p>Un lugar increíble donde tomarte algo con tu mascota. Mejor ir por la mañana o a mediodía, porque por la noche suele llenarse y convertirse en un bar de copas.</p>
          </div>

        </div>
        <div className='favoritesandPhotosContainer'>
            <div className='favoritesContainer'>
              <h6>Favoritos:</h6>
            </div>
            <div className='photosContainer'>
              <h6>Fotos:</h6>
            </div>
        </div>
      </div>
      <Modal onClose={closeModal} show={showModal} />
    </div>
    
    </>
  )
}

export default Dashboard;




// con destructuring

// const [userData, setUserData] = useState({
//   name: '',
//   surname: '',
//   alias: '',
// });
// const { name, surname, alias } = userData;
// useEffect((target) => {
//   setUserData({
//     ...userData,
//     [target.name]: nameFromCookie,
//     [target.surname]: surnameFromCookie,
//     [target.alias]: aliasFromCookie,
//   })
// }, [])
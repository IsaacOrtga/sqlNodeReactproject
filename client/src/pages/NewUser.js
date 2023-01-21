import React from 'react';
import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Registration from '../components/newUser/Registration.js';

const NewUser = () => {
  return (
    <div>
        <Navbar />
        <Registration />
        {/* <Footer /> */}
    </div>
  )
}


export default NewUser;
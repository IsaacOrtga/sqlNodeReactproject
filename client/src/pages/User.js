import React from 'react'
import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
// import ImgPerfil from '../components/user/Imgperfil'
import Login from '../components/login/Login'

const User = () => {
  return (
    <div>
        <Navbar />
        {/* <ImgPerfil /> */}
        <Login />
        <Footer />
    </div>
  )
}

export default User;
import React from 'react'
import Calendar from '../components/events/Calendar';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
export const Schedule = () => {
  return (
    <div>
        <Navbar />
        <Calendar />
        {/* <Footer /> */}
    </div>
  )
}

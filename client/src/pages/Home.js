import React from 'react'
import Navbar from '../components/navbar/Navbar.js'
import Search from '../components/searcher/Search.js'
import Mapa from '../components/map/Mapa'
import Footer from '../components/footer/Footer.js'
import Cover from '../components/cover/Cover.js'


 const Home = () => {
    return (
        <div className='bg-luz'>
            <Navbar />
            <Search />
            <Mapa />
            <Cover />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;
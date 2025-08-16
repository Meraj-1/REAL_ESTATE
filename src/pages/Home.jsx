import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Options from '../components/Options.jsx'
import Properties from '../components/Properties.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <Options/>
        <Properties/>
    </div>
  )
}

export default Home
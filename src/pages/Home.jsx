import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Options from '../components/Options.jsx'
import Properties from '../components/Properties.jsx'
import Testimonials from '../components/Testimonials.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <Options/>
        <Properties/>
        <Testimonials/>
    </div>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Options from '../components/Options.jsx'
import Properties from '../components/Properties.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Question from '../components/Question.jsx'
import Thought from '../components/Thought.jsx'

const Home = () => {
  return (
    <div className='bg-black'>
        {/* <Header/> */}
        {/* <Navbar/> */}
        <Hero/>
        <Options/>
        <div className='max-w-[1790px] bg-black mx-auto px-4'>
        <Properties/>
        <Testimonials/>
        <Question/>
        <Thought/>
        </div>
    </div>
  )
}

export default Home
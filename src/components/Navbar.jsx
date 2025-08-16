import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    
    <div className='flex px-30 justify-between items-center bg-[#1A1A1A] p-4 shadow-md'>
        <div className='flex gap-2'>
            <img className='h-8 w-auto' src={assets.Symbol} alt="" />
            <p className='text-2xl text-white font-bold'>Estatein</p>
        </div>
        <div>
            <ul className='flex gap-6 font-light text-sm text-white'>
                <li className='hover:text-gray-400 cursor-pointer'>Home</li>
                <li className='hover:text-gray-400 cursor-pointer'>Properties</li>
                <li className='hover:text-gray-400 cursor-pointer'>About Us</li>
                <li className='hover:text-gray-400 cursor-pointer'>Services</li>
            </ul>
        </div>
        <div>
            <div className='bg-black px-4 py-2 rounded-md'>
            <button className='text-white text-sm font-light cursor-pointer'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import assets from '../assets/assets'

const serviceExper = () => {
  return (
    <div className="bg-[#1A1A1A] flex flex-col  py-30 text-white">
      <div className="px-50">
        <h1 className='text-4xl pb-4 font-semibold'>Elevate Your Real Estate Experience</h1>
        <p className='text-sm text-gray-400'>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs <br /> and dreams.</p>
      </div>
      <div className='grid grid-cols-4 bg-black py-3 px-3 mt-10 gap-3 text-white'>
        <div className='flex bg-[#1A1A1A]  rounded-lg flex-col p-8 justify-center items-center text-center  gap-4'>
          <img className='h-14' src={assets.Oprion1} alt="" />
          <p className='text-sm'>Find Your Dream Home</p>
        </div>
        <div className='flex bg-[#1A1A1A] rounded-lg  flex-col p-8 justify-center items-center text-center px-10 gap-4'>
          <img className='h-14' src={assets.Option2} alt="" />
          <p className='text-sm'>Unlock Property Value</p>
        </div>
        <div className='flex bg-[#1A1A1A] rounded-lg flex-col p-8 justify-center items-center text-center px-10 gap-4'>
          <img className='h-14' src={assets.Option3} alt="" />
          <p className='text-sm'>Effortless Property Management</p>
        </div>
        <div className='flex bg-[#1A1A1A] rounded-lg flex-col p-8 justify-center items-center text-center px-10 gap-4'>
          <img className='h-14' src={assets.Option4} alt="" />
          <p className='text-sm'>Smart Investments, Informed Decisions</p>
        </div>
      </div>
    </div>
  )
}

export default serviceExper
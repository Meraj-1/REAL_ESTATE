import React from 'react'
import assets from '../assets/assets'

const Achivements = () => {
  return (
    <div className='bg-black pt-30 md:px-70'>
        <div className=''>
            <img src={assets.star} className='mb-3' alt="" />
            <h1 className='text-3xl text-white mb-4 font-medium'>Our Achivememts</h1>
            <p className='text-gray-400 text-sm'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
       <div className=' mt-10'>
        <div className='flex gap-5'>

            <div className='bg-[#1A1A1A] px-9 py-9 rounded-lg border-gray-200'>
                <h1 className='text-white mb-4 text-2xl font-medium'>3+ Years of Excellence</h1>
                <p className='text-gray-400 text-xs'>With over 3 year in the industry we've amassed a wea;th of knowledge and experience becoming a go-to resource for all things real estate</p>
                </div>
            <div className='bg-[#1A1A1A] px-9 py-9 rounded-lg border-gray-300'>
            <div className='rounded-lg  border-gray-200'>
                <h1 className='text-white mb-4 text-2xl font-medium'>Happy Clients</h1>
                <p className='text-gray-400 text-xs'>Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
            </div>
            </div>
            <div className='bg-[#1A1A1A]c px-9 py-9 rounded-lg border-gray-200'>
                <h1 className='text-white mb-4 text-2xl font-medium'>Industry Recognition</h1>
                <p className='text-gray-400 text-xs'>We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Achivements
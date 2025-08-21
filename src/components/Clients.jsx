import React from 'react'
import assets from '../assets/assets'

const Clients = () => {
  return (
    <div className='md:px-70 bg-black text-white pt-30 '>
    <img src={assets.star} className='mb-3 h-6 mr-4' alt="" />
        <div>
            <h1 className='text-2xl font-medium mb-6'>Our Valued Clients</h1>
            <p className='text-gray-400 text-sm'>At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</p>
        </div>

        <div className='flex justify-between mt-4 '>
             <div className='border-2 border-gray-600 p-10 rounded-lg w-full mr-4'>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='text-lg font-medium text-gray-500'>Since 2019</p>
                        <h1 className='mt-2 text-2xl font-medium '>ABC Corporation</h1>
                    </div>
                    <div className='flex bg-[#1A1A1A] rounded-xl px-6'>
                        <button>Visit Website</button>
                    </div>
                </div>
                <div className='flex  mb-6 justify-between '>
                    <div>
                        <p className='text-xl text-gray-400'>Domain</p>
                        <p className='text-xl mt-1'>Commercial Real Estate</p>
                    </div>
                    <div>
                        <p className='text-xl text-gray-400'>Category</p>
                        <p className='text-xl mt-1'>Luxury Home Development</p>
                    </div>
                </div>
                <div className='p-5 bg-[#1A1A1A] border-gray-500 rounded-lg'>
                    <p className='text-lg text-gray-400'>What They Said</p>
                    <p className='text-white mt-5'>Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
                </div>
             </div>
              <div className='border-2 border-gray-600 p-10 rounded-lg w-full mr-4'>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='text-lg font-medium text-gray-500'>Since 2018</p>
                        <h1 className='mt-2 text-2xl font-medium '>GreenTech Enterprises</h1>
                    </div>
                    <div className='flex bg-[#1A1A1A] rounded-xl px-6'>
                        <button>Visit Website</button>
                    </div>
                </div>
                <div className='flex  mb-6 justify-between '>
                    <div className='pl-10'>
                        <p className='text-xl text-gray-400'>Domain</p>
                        <p className='text-xl mt-1'>Commercial Real Estate</p>
                    </div>
                    <div>
                        <p className='text-xl text-gray-400'>Category</p>
                        <p className='text-xl mt-1'>Reatail Space</p>
                    </div>
                </div>
                <div className='p-5 bg-[#1A1A1A] border-gray-500 rounded-lg'>
                    <p className='text-lg text-gray-400'>What They Said</p>
                    <p className='text-white mt-5'>Estatein's ability to identify prime retail locations helped usn expand our brand presence they are a trusted partner in our growth</p>
                </div>
             </div>
        </div>
        <div className='border-t border-b mt-30 border-gray-400 gap-60 flex'>
                 <div className='p-15'>
                    <h1 className='text-2xl mb-2 font-medium '>Start Your Real Estate Journey Today</h1>
                    <p className='text-sm text-gray-400'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                 </div>
                 <div className='flex justify-center items-center p-15'>
                    <button className='bg-[#703BF7] px-20  py-3 rounded-lg text-white text-xs cursor-pointer mt-4'>Explore{' '}Properties</button>
                 </div>
        </div>
    </div>
  )
}

export default Clients
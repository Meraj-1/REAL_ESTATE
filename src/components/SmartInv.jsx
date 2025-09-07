import React from 'react'
import assets from '../assets/assets'

const SmartInv = () => {
  return (
    <div className='bg-black flex gap-5 px-50 text-white pt-40'>
   <div>
    <div>
        <img className='h-7 mb-2' src={assets.star} alt="" />
        <h1 className='text-6xl font-bold'>Smart Investments, Informed Decisions</h1>
        <p className=' pt-5 text-sm text-gray-400'>Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.
        </p>
    </div>
      <div className="bg-[#1a1a1a]  rounded-2xl  mt-10 p-10 bg-[url('./assets/Abstract.png')]">
        <h1 className='text-xl'>
            Unlock Your Investment Potenial
        </h1>
        <p className='text-sm pt-3'>
            Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
        </p>
      
      <div className='flex justify-center items-center pt-6'>  
        <button className='bg-black text-gray-500 px-30 py-3 cursor-pointer'>
            Learn More
        </button></div>
     </div>
   </div>
    <div className='bg-[#1a1a1a] border-gray-800 rounded-2xl p-2 gap-2 grid grid-cols-2'>
        <div className='bg-black border-gray-800 rounded-2xl flex flex-col justify-center p-15'>
            <div className='flex items-center gap-3'>
                <img className='h-15' src={assets.Oprion1} alt="" />
                <h1 className='text-xl font-bold '>Market Insight</h1>
            </div>
            <p  className='text-sm text-gray-400 pt-6 '>
                Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments
            </p>
        </div>
        <div className='bg-black border-gray-800 rounded-2xl flex flex-col justify-center p-15'>
            <div className='flex items-center gap-3'>
                <img className='h-15' src={assets.Option2} alt="" />
                 <h1 className='text-xl font-bold '>ROI Assessment</h1>          
             </div>
             <p className='text-sm text-gray-400 pt-6'>
                Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions
             </p>
        </div>
        <div className='bg-black border-gray-800 rounded-2xl flex flex-col justify-center p-15'>
            <div className='flex items-center gap-3'>
                <img className='h-15' src={assets.Option3} alt="" />
                <h1 className='text-xl font-bold '>Customized Strategies</h1>
            </div>
            <p className='text-sm text-gray-400 pt-6'>
                Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs
            </p>
        </div>
        <div className='bg-black border-gray-800 rounded-2xl flex flex-col justify-center p-15'>
            <div className='flex items-center gap-3'>
                <img className='h-15' src={assets.Option4} alt="" />
                <h1 className='text-xl font-bold '>Diversification Mastery</h1>
            </div>
            <p className='text-sm text-gray-400 pt-6'>
                Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations
            </p>
        </div>
    </div>
    </div>
  )
}

export default SmartInv
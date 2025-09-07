import React from 'react'
import assets from '../assets/assets'

const UnlockProp = () => {
  return (
    <div className='px-50 pt-17 text-white bg-black'>
     <img className='h-6' src={assets.star} alt="" />
     <h1 className='text-4xl font-semibold pt-3'>Unlock Property Value</h1>
     <p className='text-sm mb-12 text-gray-400 pt-3'>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. <br/> Explore the categories below to see how we can help you at every step of your selling journey</p>
      <div className='grid grid-cols-3 gap-10'>
        <div className='border p-5 border-gray-900  py-10 rounded-lg'>
            <div className='flex items-center gap-5'>
            <img className='h-15' src={assets.Oprion1} alt="" />
             <p className='text-xl font-bold'>Tenant Harmony</p>
             </div>
             <p className='text-sm text-gray-400 pt-3'>
                Our Tenant Harmony service ensures a seamless rental experience for both landlords and tenants. We handle everything from tenant screening to lease agreements, ensuring 
             </p>
        </div>
        <div className='border p-5 border-gray-900  py-10 rounded-lg'>
            <div>
               <div className='flex items-center gap-5'>
                <img className='h-15' src={assets.Option2} alt="" />
                 <h1 className='text-xl font-bold '>Maintenance Ease</h1>
                 </div>
             <p className='text-sm text-gray-400 pt-3'>Selling a property requires more than just a listing it demand
              a strategic marketing approach
             </p>
            </div>
        </div>
        <div className='border p-5 border-gray-900  py-10 rounded-lg'>
          <div className='flex items-center gap-5'>
          <img className='h-15' src={assets.Option3} alt="" />
           <h1 className='text-xl font-bold'>Financial Peace of </h1>
          </div>
          <p className='text-sm text-gray-400 pt-3'>Negotiating the best deal is an art and our Negotiating experyt
            are master to fit
          </p>
        </div>
        <div className='border p-5 border-gray-900 py-10 rouded-lg'>
          <div className='flex items-center gap-5'>
          <img className='h-15' src={assets.Option4} alt="" />
           <h1 className='text-xl font-bold'>Legal Guardian</h1>
          </div>
            <p className='text-sm text-gray-400 pt-3'>A succesful sale is not complete until the closing
              we guide you through the intricate closing process
            </p>
        </div>
        <div
        className="bg-[url('./assets/Abstract.png')] bg-[#1a1a1a] col-span-2 border p-5 border-gray-900  py-10 rounded-lg">
          <div>
          <h1 className='text-2xl font-bold'>Unlock the Value of your Property Today</h1>
          <button className=''>Learn More</button>
          </div>
           <p className='text-sm text-gray-400 pt-3'>Ready to unlock the true value of your property? Explore our property selling Service categories and let us help you <br/> achieve the best deal possible for yout 
           your valuble asset
           </p>
        </div>
      </div>
     </div>       
)
}

export default UnlockProp
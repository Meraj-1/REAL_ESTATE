import React from 'react'
import assets from '../assets/assets'

const Options = () => {
  return (
    <div className="pt-2 bg-black  shadow-md">
      <div className="grid bg-black gap-6 grid-cols-4 border border-gray-700 p-5  text-white text-center">
        {/* Option 1 */}
       {/* <div className='border-gray'> */}
        <div className="flex flex-col rounded-2xl bg-[#1A1A1A] border border-gray-600 p-10 items-center">
          <img src={assets.Oprion1} alt="Option 1" className="w-16 mb-5 h-16" />
          <p className="text-sm font-light">Find Your Dream Home</p>
        </div>

        {/* Option 2 */}
        <div className="flex flex-col rounded-2xl border bg-[#1A1A1A]  border-gray-700 p-10 items-center">
          <img src={assets.Option2} alt="Option 2" className="w-16 mb-5 h-16" />
          <p className="text-sm font-light">Unlock Property Value</p>
        </div>

        {/* Option 3 */}
        <div className="flex flex-col border rounded-2xl p-10 bg-[#1A1A1A] border-gray-700  items-center ">
          <img src={assets.Option3} alt="Option 3" className="w-16 mb-5 h-16" />
          <p className="text-sm font-light">Effortless Property Management</p>
        </div>

        {/* Option 4 */}
        <div className="flex flex-col border p-10 rounded-2xl bg-[#1A1A1A] border-gray-700 items-center gap-2">
          <img src={assets.Option4} alt="Option 4" className="w-16 mb-5 h-16" />
          <p className="text-sm font-light">Smart Investment, Informed Decisions</p>
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Options

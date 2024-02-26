import React, { useState } from 'react'

import { AiOutlineWhatsApp, AiOutlineMenu, AiOutlineClose, AiOutlineHeatMap } from 'react-icons/ai'
import { FaMapMarkerAlt } from "react-icons/fa";
function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=' shadow-md '>
      <div className=' lg:flex flex-row hidden  w-screen fixed z-50 top-0  bg-white h-20  gap-96 px-10 '>
        <div>
          <img src="/logo.png" alt="Raaya mattress logo" className=' w-32 h-18' />
        </div>
        <div >
          <ul className='flex flex-row w-[25vw] justify-between mt-8 cursor-pointer' >
            <li className='text-lg '>Products</li>
            <li className='text-lg '>About Us</li>
            <li className='text-lg '>FAQ</li>
            <li className='text-lg '>Brochure</li>

          </ul>
        </div>
        <div className=' ml-32'>
          <AiOutlineWhatsApp className='mt-9 h-6 w-6' />
        </div>


      </div>

      {/* mobilenav */}
      <div>
        <div className='flex lg:hidden justify-between w-screen z-10 fixed bg-white px-10 ml-2 '>

          <div className='flex items-center'>


            {showMenu ? (
              <AiOutlineClose onClick={toggleMenu} className='w-5 h-5 cursor-pointer' />
            ) :
              (

                <AiOutlineMenu className='h-5 w-5 mr-4 cursor-pointer' onClick={toggleMenu} />
              )

            }

          </div>
          <div>
            <img src="/logo.png" alt="Raaya mattress logo" className='w-24 h-14 mt-3' />
          </div>
          <div className='flex flex-row gap-6 mt-6 '>
            <FaMapMarkerAlt className='h-5 w-5'/>
            <AiOutlineWhatsApp className='h-5 w-5'/>
          </div>
        </div>


        <div className={`fixed top-14 left-0 bottom-0  bg-white lg:hidden overflow-y-auto z-20 w-screen transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex flex-col items-start w-screen h-auto  px-10 py-2'>

            <ul>
              <li className='text-lg mb-2'>Products</li>
              <li className='text-lg mb-2'>About Us</li>
              <li className='text-lg mb-2'>FAQ</li>
              <li className='text-lg mb-2'>Brochure</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar

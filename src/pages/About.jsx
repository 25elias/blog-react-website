import React from 'react'
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className='w-full h-full'>
      <div className=' bg-slate-300 text-black'>
        <div className='px-8 py-32 m-auto text-center'>
          <h1 className='text-5xl lg:text-7xl leading-[1.5] font-semibold py-8'>About Us</h1>
        </div>
      </div>

        {/* Top Authors */}
      <div className='max-w-5xl mx-auto px-8 py-20'>
        <div className='flex flex-col gap-8 md:flex-row md:justify-between pt-8 pb-4'>
          <div className='order-2 md:order-1 w-full rounded-xl overflow-hidden'>
            <img src="../assets/about.png" alt="About"
            className=' rounded-xl overflow-hidden' />
          </div>
          <div className='order-1 pt-4 pb-8 md:py-16'>
            <h3 className='text-sm text-orange-500 py-2 text-center md:text-start'>Who We Are</h3>
            <p className='text-3xl text-gray-900 font-bold mt-2 mb-4'>We provide high quality articles &amp; blogs</p>
            <p className='text-sm text-gray-800 mt-2 mb-4'>dolores cum dolor quasi culpa debitis numquam v
              oluptatem veritatis, soluta enim, quisquam eveniet 
              atque repellat!</p>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Distinctio ea consectetur aliquam animi optio similique </p>
          </div>
        </div>

        <div className='mt-2 py-16'>
          <h3 className='text-3xl text-gray-900 font-bold mt-2 mb-8'>Top Authors</h3>
          
          <div className=' mt-2 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4'>
            <div className='max-w-md text-center bg-gray-100 border p-8 shadow-lg hover:shadow-xl'>
              <div className='w-24 mx-auto'>
                <img src="../assets/user-01.png" alt="" />
              </div>
              <p className='text-sm text-gray-900 font-semibold  mt-2 mb-4'>Adrio David</p>
              <p className='text-sm text-gray-800 mb-2'>Director of Operation</p>
              <p className='inline-flex items-baseline gap-2 text-sm text-gray-800'><FaFileAlt className='w-3 h-3' /> 12 Articles Published</p>
            </div>

            <div className='max-w-md text-center  bg-gray-100 border p-8 shadow-lg hover:shadow-xl'>
              <div className='w-24 mx-auto'>
                <img src="../assets/user-01.png" alt="" />
              </div>
              <p className='text-sm text-gray-900 font-semibold  mt-2 mb-4'>Adrio David</p>
              <p className='text-sm text-gray-800 mb-2'>Director of Operation</p>
              <p className='inline-flex items-baseline gap-2 text-sm text-gray-800'><FaFileAlt className='w-3 h-3' /> 12 Articles Published</p>
            </div>
            <div className='max-w-md text-center  bg-gray-100 border p-8 shadow-lg hover:shadow-xl'>
              <div className='w-24 mx-auto'>
                <img src="../assets/user-01.png" alt="" />
              </div>
              <p className='text-sm text-gray-900 font-semibold  mt-2 mb-4'>Adrio David</p>
              <p className='text-sm text-gray-800 mb-2'>Director of Operation</p>
              <p className='inline-flex items-baseline gap-2 text-sm text-gray-800'><FaFileAlt className='w-3 h-3' /> 12 Articles Published</p>
            </div>
            <div className='max-w-md text-center  bg-gray-100 border p-8 shadow-lg hover:shadow-xl'>
              <div className='w-24 mx-auto'>
                <img src="../assets/user-01.png" alt="" />
              </div>
              <p className='text-sm text-gray-900 font-semibold  mt-2 mb-4'>Adrio David</p>
              <p className='text-sm text-gray-800 mb-2'>Director of Operation</p>
              <p className='inline-flex items-baseline gap-2 text-sm text-gray-800'><FaFileAlt className='w-3 h-3' /> 12 Articles Published</p>
            </div>
          </div>
        </div>

      </div>
  </div>
  )
}

export default About
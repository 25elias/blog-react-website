import React from 'react'
import ServicePage from '../components/ServicePage';

const Services = () => {
  return (
    <div>
      <div className=' bg-slate-300 text-black'>
        <div className='px-8 py-32 m-auto text-center'>
          <h1 className='text-5xl lg:text-7xl leading-[1.5] font-semibold py-8'>Our Service</h1>
        </div>
      </div>
      <div>
        <div className='text-center mt-2 pt-16 pb-8'>
          <p className='text-sm text-orange-500 py-2'>Our Service</p>
          <h3 className='text-3xl text-gray-900 font-bold mt-2 mb-4'>What We Offer</h3>
          <p className='text-sm text-gray-800 mt-2 mb-4 px-8 md:w-1/2  mx-auto'>There are many variation of passeges of lorem ipsum 
            but the majority of suffered alteration in some form.
          </p>
        </div>
        <div>
          <ServicePage />
        </div>
      </div>
  </div>
  )
}

export default Services;
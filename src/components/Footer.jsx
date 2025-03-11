import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-full pt-12 pb-8'>
      {/* Ads */}
      <div className='border-t-2 border-gray-700 py-12'>
        <h3 className='text-xl italic  text-center tracking-wide'>Free Shipping over $59 within Australia.</h3>
      </div>

      {/* Footer items */}
      <div className='border-y border-gray-900 py-12 px-12 flex-grow
      grid footer-grid'>
        <div className='w-full col-span-2'>
          <p className='text-xl text-gray-900 font-semibold uppercase
          tracking-widest pb-3'>Subscribe</p>
          <div className='flex flex-col gap-2'>
            <input type="text" name="" id=""
            className='contact-form_input' />
            <button className='text-sm text-white uppercase tracking-wider py-3 border border-white rounded px-4 bg-black'>Submit</button>
          </div>
        </div>

        <div className='sm:ml-8 border-l-2 px-4 border-gray-500'>
          <p className='text-sm text-gray-600 font-semibold uppercase tracking-wide'>Service</p>
          <ul className='space-y-4 mt-2 text-gray-900 '>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
          </ul>
        </div>
        
        <div className='ml-8 border-l-2 px-4 border-gray-500'>
          <p className='text-sm text-gray-600 font-semibold uppercase tracking-wide'>Service</p>
          <ul className='space-y-4 mt-2 text-gray-900 '>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
          </ul>
        </div>
        
        <div className='sm:ml-8 border-l-2 px-4 border-gray-500'>
          <p className='text-sm text-gray-600 font-semibold uppercase tracking-wide'>Service</p>
          <ul className='space-y-4 mt-2 text-gray-900 '>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
          </ul>
        </div>
        
        <div className='ml-8 border-l-2 px-4 border-gray-500'>
          <p className='text-sm text-gray-600 font-semibold uppercase tracking-wide'>Service</p>
          <ul className='space-y-4 mt-2 text-gray-900 '>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://www.x.com/">X</a></li>
            <li><a href="https://www.youtube.com/">Youtube</a></li>
          </ul>
        </div>


      </div>

      {/* copy-rights */}
      <div className='max-w-7xl mx-auto text-center pt-4 px-4 flex flex-col gap-2 sm:text-start sm:flex-row sm:items-center sm:justify-between'>
        <p>
          &copy; All rights reserved
        </p>
        <p>
          Designed by Usman!
        </p>
      </div>
    </footer>
  )
}

export default Footer
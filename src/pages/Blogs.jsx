import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div className="">
        <div className=' bg-slate-300 text-black px-8 py-32 m-auto text-center'>
          <h1 className='text-5xl lg:text-7xl leading-[1.5] font-semibold py-8'>Blog Page</h1>
        </div>
        <div className='max-w-7xl m-auto h-full '>
          <BlogPage />
        </div>
    </div>
  );
}

export default Blogs
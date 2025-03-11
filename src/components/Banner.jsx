import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const Banner = () => {
    return(
        <div>
            <div className='px-8 py-40 m-auto text-white text-center banner w-full h-[90vh] '>
                <h1 className='text-5xl lg:text-7xl leading-[1.5] font-semibold py-8'>Welcome to Our Blog</h1>
                <Link to={'/blogs'}
                className='
                inline-flex items-center gap-2
                text-sm font-semibold hover:text-blue-300 mb-4 '>Read more <FaArrowRight className='w-4 h-4' /> 
            </Link>
            </div>
        </div>
    )
}

export default Banner;
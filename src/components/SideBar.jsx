import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
      console.log(setPopularBlogs);
  }, []);

  return (
    <div>
      {/* Latest Blogs */}
      <div className="mt-12">
        <h3 className="text-2xl text-gray-900 font-semibold mb-2">Latest Blogs</h3>
        {popularBlogs.slice(0, 5).map((blog) => (
          <div key={blog.id}
          className=" my-2 p-2 boreder-2 border-gray-300 shadow-md">
            <h4 className="text-sm text-gray-600 font-semibold mb-2  ">{blog.title}</h4>
            <Link to={`/blogs/${blog.id}`}
                className='
                inline-flex items-center gap-2
                text-sm font-semibold hover:text-orange-500 mb-4 '>Read more <FaArrowRight className='w-4 h-4' /> 
            </Link>
          </div>
          
        ))}
      </div>

      {/* Popular Blogs */}
      <div className="mt-12 lg:px-0 ">
        <h3 className="text-2xl text-gray-900 font-semibold mb-2">Popular Blogs</h3>
        {popularBlogs.slice(6, 10).map((blog) => (
          <div key={blog.id}
          className=" my-2 p-2 boreder-2 border-gray-300 shadow-md">
            <h4 className="text-sm text-gray-600 font-semibold mb-2  ">{blog.title}</h4>
            <Link to={`/blogs/${blog.id}`}
                className='
                inline-flex items-center gap-2
                text-sm font-semibold hover:text-orange-500 mb-4 '>Read more <FaArrowRight className='w-4 h-4' /> 
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SideBar;

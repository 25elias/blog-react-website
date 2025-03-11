import React from 'react';
import { Link } from 'react-router';
import { FaUser } from 'react-icons/fa6';

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
  .filter(() => !selectedCategory || blogs.category === selectedCategory)
  .slice((currentPage -1) * pageSize, currentPage * pageSize);
  

  return (

        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 lg:gap-4">
        {
          filteredBlogs.map((blog) => 
          <Link 
          to={`/blogs/${blog.id}`} 
          key={blog.id}
          className="p-4 text-sm shadow-md hover:shadow-lg transition-all ease-out duration-300 rounded">
            <div>
              <img src={blog.image} alt='' className="w-full" />
            </div>
            <h3 className="mt-2 hover:text-blue-500
            transition-all ease-out duration-300 cursor-pointer">{blog.title}</h3>
            <p className="text-gray-900 mt-4 mb-2 inline-flex items-base"><FaUser className="w-4 h-4 mr-2" />{blog.author}</p>
            <p className="text-gray-500 mb-2">Published: {blog.published_date}</p>

          </Link>)
        }
        </div>

  );
}

export default BlogCard;
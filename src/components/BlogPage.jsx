import React, { useState, useEffect } from 'react';
// import  { Link } from 'react-router';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import Category from './Category';
import SideBar from './SideBar';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 // blogs per page.
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory , setActiveCategory] = useState(null);
 

    
    useEffect(() => {
        // const filteredBlogs = blogs;
    
        const fetchBlogs = async () => {
    
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
    
            //filter by category
            if(selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
    
    
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])


    //onClick btn = change pages
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //onClick btn = change Categories
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }


  return (

    <div className='max-w-7xl m-auto '>
        <div>
            <Category onSelectedCategory={handleCategoryChange} selectedCategory={selectedCategory}
        activeCategory={activeCategory} blogs={blogs} /></div>

        <div className='px-4 flex flex-col gap-4 lg:flex-row md:justify-between'>
            <div className='w-full'>
             <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
            </div>
            {/* Latest Blog */}
            <div className=" px-4 md:w-1/2 lg:w-[30%] mt-8 lg:mt-2">
              <SideBar />
            </div>
        </div>
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} pageSize={pageSize} blogs={blogs} />
        </div>
    </div>


  )
}

export default BlogPage;
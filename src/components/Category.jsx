import React from 'react'

const Category = ({onSelectedCategory, activeCategory, }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className='w-full text-xs inline-flex flex-wrap items-center border-b border-gray-200 pb-4 gap-4 mt-8 mb-2 px-8'>
        <button 
        onClick={() => onSelectedCategory(null)}
        className={`text-gray-900 font-semibold  mr-4 ${activeCategory ? "" : "active-btn"}`}>All</button>
        {
            categories.map((category) => (
                <button
                onClick={() => onSelectedCategory(category)}
                key={category}
                className={`text-gray-900 font-semibold  mr-4  
                    ${activeCategory === category ? "active-btn" : ""}`}>
                    {category}
                </button>
            ))
        }
    </div>
  );
}

export default Category;
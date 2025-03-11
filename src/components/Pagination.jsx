import React from 'react';

const Pagination = ({blogs, currentPage, pageSize, onPageChange}) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
    // console.log(totalPages);

    const renderPaginationLink = () => {
        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) =>
            <li className={pageNumber === currentPage ? "isActivePagination" : ""} key={pageNumber}>
                <a href="#" 
                onClick={() => onPageChange(pageNumber)}
                className="border border-gray-300 px-4 py-2 rounded shadow-lg">{pageNumber}</a>
            </li>
        )
    } 
    return (
        <ul className="max-w-3xl mx-auto flex flex-wrap items-center gap-4 justify-between px-12 py-8">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}>Previous</button>
            </li>
            <div className="flex flex-wrap items-center justify-between">{renderPaginationLink()}</div>
            <li>
                <button onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>Next</button>
            </li>
        </ul>
    )
}

export default Pagination;
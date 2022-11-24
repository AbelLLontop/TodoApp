import React from 'react'



const Pagination = ({pagination,selectPage}) => {
  return (
    <nav className="navigation d-flex justify-content-center">
      
    <ul className="pagination">
      {Array(pagination.numberPages)
        .fill(0)
        .map((_, index) => (
          <li
            key={index}
            className={`page-item ${
              pagination.currentPage === index + 1 ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>selectPage(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
    </ul>
  </nav>
  )
}

export default Pagination
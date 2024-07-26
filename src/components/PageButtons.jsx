import React, { useState } from 'react';

export default function PageButtons({ totalPages = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-between items-center w-full px-4">
      <div className="flex items-center">
        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
          className="px-4 py-2 bg-white rounded-lg flex items-center gap-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://img.icons8.com/material-rounded/24/000000/chevron-left.png"
            alt="Previous"
          />
          <span className="text-black text-sm font-medium font-poppins">
            Previous
          </span>
        </button>
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-lg flex justify-center items-center ${
                currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'
              }`}
            >
              <span
                className={`text-sm font-medium font-poppins ${
                  currentPage === index + 1 ? 'text-black' : 'text-black/50'
                }`}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          className="px-4 py-2 bg-white rounded-lg flex items-center gap-2 hover:bg-gray-100 transition"
        >
          <span className="text-black text-sm font-medium font-poppins">
            Next
          </span>
          <img
            src="https://img.icons8.com/material-rounded/24/000000/chevron-right.png"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}

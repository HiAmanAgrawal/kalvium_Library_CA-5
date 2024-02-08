import React from 'react';

function Book({ book }) {
  return (
    <div key={book.id} className="relative bg-yellow-50 min-w-72 min-h-80 max-h-80 p-8 m-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-center mb-2">
        <img src={book.imageLinks.thumbnail} alt={book.title} className="w-32 h-48 mb-2 rounded-lg shadow-md" />
      </div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h6 className="text-sm font-semibold mb-1">{book.title}</h6>
          <p className="text-sm text-gray-700">{book.authors}</p>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 text-base">&#9733;</span>
          <span className="ml-1 text-gray-600">
            {book.averageRating ? book.averageRating : (2.5 + Math.floor(Math.random() * 3.5 * 10) / 10)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Book;

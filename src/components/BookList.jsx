import React from "react";
import Book from "./Book";

function BookList({ books }) {
  return (
    <div className="overflow-y-scroll h-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center w-9/12 m-auto mt-5">
      {books.length === 0 ? (
        <div className="col-span-3 flex flex-col items-center justify-center">
        <iframe src="https://giphy.com/embed/26n6WywJyh39n1pBu" width="480" height="320" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/looking-looney-tunes-searching-26n6WywJyh39n1pBu">via GIPHY</a></p>
        <p className="text-center text-4xl">	&#129302; Oops! No books here. Looks like they're playing hide and seek!</p>
        </div>
      ) : (
        books.map((book) => (
          <Book key={book.id} book={book} />
        ))
      )}
    </div>
  );
}

export default BookList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import BookList from "./BookList";
import Register from "./Register";
import { Routes, Route } from 'react-router-dom';
import SearchForm from "./SearchForm";

function BookStore() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://reactnd-books-api.udacity.com/books";
    const headers = {
      Authorization: "whatever-you-want",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setBooks(response.data.books);
        setFilterData(response.data.books);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === "") {
      setFilterData(books);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterData(filteredBooks);
    }
  };

  return (
    <div className="overflow-hidden h-screen bg-red-50">
      <NavBar onSearch={handleSearch} />
      <div className="line border-b-2 border-black"></div>
      <div className="md:hidden">
      <SearchForm onSearch={handleSearch} />
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<BookList books={filterData} />} />
      </Routes>
    </div>
  );
}

export default BookStore;

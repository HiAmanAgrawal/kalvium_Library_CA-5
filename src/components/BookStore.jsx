import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import BookList from "./BookList";
import Register from "./Register";
import { Routes, Route } from 'react-router-dom';
import SearchForm from "./SearchForm";

function BookStore() {
  // State hooks to manage search query, books data, and filtered data
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const apiUrl = "https://reactnd-books-api.udacity.com/books";
    const headers = {
      Authorization: "whatever-you-want",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("fetched successfully")
        setBooks(response.data.books);
        setFilterData(response.data.books);
      })
      .catch((error) => {
        console.error("Fetch problem:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once, when component mounts

  // Function to handle search queries
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === "") {
      // If search query is empty, reset filtered data to all books
      setFilterData(books);
    } else {
      // Filter books based on search query
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
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<div className="h-full"><div className="md:hidden"><SearchForm onSearch={handleSearch} /></div><BookList books={filterData} /></div>} />
      </Routes>
    </div>
  );
}

export default BookStore;

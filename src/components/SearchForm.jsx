import React, { useState } from "react";

function SearchForm({ onSearch }) {
  // State hook to manage the search query
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSearch(query);
  };

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        {/* Input field for the search query */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Which Book do you want?"
          className="w-full h-10 px-2 lg:px-4 font-bold text-xl border-b-4 border-red-400 bg-gray-100 focus:border-black focus:outline-none"
        />
        
        {/* Submit button for the search form */}
        <button type="submit" className="ml-2 w-6">
          {/* Search button icon */}
          <img src="src\assets\search.png" alt="search_button" />
        </button>
        
      </form>
    </div>
  );
}

export default SearchForm;

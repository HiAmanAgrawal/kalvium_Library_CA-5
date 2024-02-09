import React, { useState } from "react";
function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Which Book do you want?"
          className="w-full h-10 px-2 lg:px-4 font-bold text-xl border-b-4 border-red-400 bg-gray-100 focus:border-black focus:outline-none"
        />
        
        <button type="submit" className="ml-2 w-6">
          <img src="src\assets\search.png" alt="search_button" />
        </button>
        
      </form>
    </div>
  );
}

export default SearchForm;

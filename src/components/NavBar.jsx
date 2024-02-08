import React from "react";
import SearchForm from "./SearchForm";

function NavBar({ onSearch }) {
  return (
    <div className="navBar flex flex-row justify-between items-center w-screen p-10 h-1/5 bg-gray-100">
      <div className="logo flex flex-row justify-center items-center">
        <img src="src/assets/Logo.png" alt="logo" className="w-16" />
        <h1 className="text-2xl font-bold">Kalvium Library</h1>
      </div>
      <div className="w-5/12">
        <SearchForm onSearch={onSearch} />
      </div>
      
      <div className="register">
        <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border-4 border-red-500 group px-8 py-2">
          <span className="relative z-10 text-red-500 group-hover:text-white text-xl duration-500">
            Register
          </span>
          <span className="absolute w-full h-full bg-red-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-red-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;

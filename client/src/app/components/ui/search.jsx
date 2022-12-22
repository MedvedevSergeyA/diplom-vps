import React, { useContext } from "react";

// Context
import SearchContext from "../../context/searchContext/searchContext";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className="m-5 italic">
      <div className="flex justify-between">
        <div className="relative w-full ml-2">
          {searchValue && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-2 left-2 text-gray-400 text-center hover:text-gray-900"
              onClick={() => setSearchValue("")}
              role="button"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          <input
            value={searchValue}
            type="search"
            id="location-search"
            className="dark:bg-inherit block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg bg-inherit dark:text-gray-600 dark:border-[#5d68cf] border-l-2 border  pl-8"
            placeholder="Поиск товара"
            required
            onChange={() => setSearchValue(event.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white dark:bg-[#1a247d] dark:text-white bg-indigo-400 rounded-r-lg border border-indigo-500 "
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

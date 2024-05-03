import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const [, setSearchParams] = useSearchParams();


    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams({ search: inputValue.trim(), page: 1 });
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4">
            <div className="relative outline-none select-none bg-main-500">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    type="search"
                    id="default-search"
                    className="without-ring block w-full p-4 pl-10 text-sm border rounded-lg bg-main-400 border-main-600 placeholder-gray-400 text-white"
                    placeholder="Search for cars (e.g., BMW, Audi, Ford)"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 without-ring font-medium rounded-lg text-sm px-4 py-2 bg-card-300 hover:bg-card-200"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;

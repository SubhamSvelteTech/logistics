"use client";
import React, { useEffect, useState } from "react";
import useDebounce from "@/services/utils/hooks/useDebounce";

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  debounceDelay?: number;
}

const SearchBar = ({ onSearch, debounceDelay = 1500 }: SearchProps) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, debounceDelay);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  // useEffect(() => {
  //   if (debouncedQuery.trim().length > 0) {
  //     onSearch(debouncedQuery);
  //   } else {
  //     onSearch(""); // Handle case for empty input if needed
  //   }
  // }, [debouncedQuery]);

  // const handleSubmit = async() => {
  //   alert('fdfd')
  // }

  return (
    <div className="xl:w-96 xs:w-[10rem] col-span-3">
      <form>
      <div className="relative flex w-full xxs:flex-wrap items-stretch">
        <input
          type="search"
          value={query}
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 text-xs font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handleInputChange}
        />

        {/* <!--Search icon--> */}
        <button
        type="button"
        onClick={()=>onSearch(query)}
          className="input-group-text flex items-center whitespace-nowrap rounded-r px-3 py-1.5 text-center text-base font-normal text-white bg-[#17242A]"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      </form>
    </div>
  );
};

export default SearchBar;

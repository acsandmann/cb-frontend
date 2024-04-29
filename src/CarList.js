import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarCard from "./components/CarCard";
import SearchBar from "./components/SearchBar";

function CarList() {
  const [cars, setCars] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const carsPerPage = 30;

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:6969/cars/");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) =>
    `${car.year} ${car.brand} ${car.model}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const paginate = (pageNumber) => {
    const newParams = { page: pageNumber.toString() };
    if (searchTerm) newParams.search = searchTerm;
    setSearchParams(newParams);
  };

  const nextPage = () => {
    const current = parseInt(searchParams.get("page") || 1);
    if (current < totalPages) {
      paginate(current + 1);
    }
  };

  const previousPage = () => {
    const current = parseInt(searchParams.get("page") || 1);
    if (current > 1) {
      paginate(current - 1);
    }
  };

  const renderPageOptions = () => {
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + 2, totalPages);
    if (end === totalPages) start = Math.max(1, totalPages - 2);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
      (number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className={`${
              number === currentPage
                ? "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            {number}
          </button>
        </li>
      )
    );
  };

  return (
    <div className="container mx-auto px-4">
      <header className="py-5 bg-gray-800 text-white text-center">
        <h1>Car Inventory</h1>
        <SearchBar setSearchParams={setSearchParams} />
      </header>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {currentCars.map((car) => (
          <CarCard car={car} key={car.sale_id} />
        ))}
      </div>
      <footer className="py-4 bg-gray-900 text-white text-center mt-5">
        <nav aria-label="Page navigation">
          <ul className="flex items-center justify-center space-x-2">
          <div className="container mx-auto flex justify-center items-center space-x-4">
            <li>
              <button
                onClick={previousPage}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
            {renderPageOptions()}
            <li>
              <button
                onClick={nextPage}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
            </div>
          </ul>
          
        </nav>
      </footer>
    </div>
  );
}

export default CarList;

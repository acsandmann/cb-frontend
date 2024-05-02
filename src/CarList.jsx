import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import CarCard from "./components/CarCard";
import LoadingCarCard from "./components/LoadingCarCard";
import SearchBar from "./components/SearchBar";
import CarModal from "./components/CarModal";
import Loading from "./components/Loading";
import { useFetch } from "./util";

function CarList() {
  const { data: cars, loading, error } = useFetch("http://localhost:6969/cars/");
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setModal] = useState(false);
  const modalEl = useRef();
  const [car, setCar] = useState({});
  const carsPerPage = 30;

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const handler = (event) => {
      if (!modalEl.current) {
        return;
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      if (!modalEl.current.contains(event.target)) {
        setModal(false);
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
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
            className={`${number === currentPage
              ? "z-10 flex items-center justify-center px-4 h-10 leading-tight bg-gray-700 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
              : "flex items-center justify-center px-4 h-10 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
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
      <SearchBar setSearchParams={setSearchParams} />
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1050
        }}>
          <CarModal ref={modalEl} car={car} setModal={setModal} showModal={showModal} />
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-4 mt-5">
        {loading ? (
          Array.from({ length: 30 }).map((_, i) => <LoadingCarCard key={i} />)

        ) : (
          currentCars.length === 0 ? (
          <p className="align-center text-white">No results found. Please try another search term.</p>
        ) : currentCars.map((car) => (
            <CarCard car={car} key={car.sale_id} setCar={setCar} showModal={showModal} setModal={setModal} />
          ))
        )}
      </div>

      <nav className="py-4 text-white text-center mt-5" aria-label="Page navigation">
        <ul className="flex items-center justify-center space-x-2">
          <div className="container mx-auto flex justify-center items-center">
            <li>
              <button
                onClick={previousPage}
                disabled={parseInt(searchParams.get("page") || 1) === 1}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight disabled:text-surface/50 border-e-0 rounded-s-lg border-gray-700 bg-gray-800 text-gray-400 enabled:hover:bg-gray-700 enabled:hover:text-white"
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
                disabled={parseInt(searchParams.get("page") || 1) === totalPages}
                className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight rounded-e-lg border-gray-700 bg-gray-800 text-gray-400 enabled:hover:bg-gray-700 enabled:hover:text-white`}
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

    </div>
  );
}

export default CarList;

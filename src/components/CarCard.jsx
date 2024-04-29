import React from "react";

const CarCard = ({ car, showModal, setModal, setCar }) => {
    return (
        <div className="flex flex-col md:flex-row md:max-w-xl overflow-hidden bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
                className="w-full md:w-36 h-auto md:h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={car.image_url}
                alt={`${car.year} ${car.brand} ${car.model}`}
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${car.year} ${car.brand} ${car.model}`}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    maybe something?
                </p>

                <button
                    //href={`/car/${car.sale_id}`}
                    onClick={() => {
                        setModal(!showModal)
                        setCar(car)
                    }}
                    data-modal-target="medium-modal"
                    data-modal-toggle="medium-modal"
                    className="inline-flex items-center justify-center w-32 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ minWidth: "120px" }} // Ensures all buttons have at least this width
                >
                    View Details
                    <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
         
    );
};

export default CarCard;
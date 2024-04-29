import React from "react";
import { useNavigate } from "react-router-dom";

const CarModal = ({ car, setModal, showModal }) => {
    const navigate = useNavigate();

    return (
        <div
            id="medium-modal"
            tabIndex="-1"
            className="overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-center pb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {`${car.year} ${car.brand} ${car.model}`}
                    </h3>
                    <button
                        onClick={() => setModal(!showModal)}
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                        aria-label="Close modal"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mb-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Detailed information about the car:
                    </p>
                    <pre className="p-2 bg-gray-100 rounded text-sm overflow-auto max-h-64 dark:bg-gray-800 dark:text-gray-300">
                        {JSON.stringify(car, null, 2)}
                    </pre>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            setModal(!showModal);
                            navigate(`/car/${car.sale_id}`);
                        }}
                        className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        style={{ minWidth: "120px" }}
                    >
                        View Details
                        <svg
                            className="ml-2 -mr-1 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarModal;

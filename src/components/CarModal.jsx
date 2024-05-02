import React from "react";
import { useNavigate } from "react-router-dom";

const CarModal = ({ car, setModal, showModal, ref }) => {
    const navigate = useNavigate();

    return (
        <div
            id="medium-modal"
            tabIndex="-1"
            className="overlay fixed inset-0 z-50 flex items-center justify-center p-4"
            ref={ref}
        >
            <div className="relative w-full max-w-4xl p-6 rounded-lg shadow-lg bg-gray-700">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {`${car.year} ${car.brand} ${car.model}`}
                    </h3>
                    <button
                        onClick={() => setModal(!showModal)}
                        className="text-gray-400 rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white"
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
                <div className="flex flex-col md:flex-row">
                    <div className="md:flex-1 mb-4 md:mb-0 md:mr-4">
                        <p className="text-base leading-relaxed text-gray-400">
                            Detailed information about the car:
                        </p>
                        <pre className="p-2 rounded text-sm overflow-auto max-h-64 bg-gray-800 text-gray-300">
                            {JSON.stringify(car, null, 2)}
                        </pre>
                    </div>
                    <div className="md:flex-1">
                        <img
                            src={car.image_url}
                            alt={`${car.year} ${car.brand} ${car.model}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => {
                            setModal(!showModal);
                            navigate(`/car/${car.sale_id}`);
                        }}
                        className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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

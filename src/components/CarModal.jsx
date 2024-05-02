import React from "react";
import { useNavigate } from "react-router-dom";

const CarModal = ({ car, setModal, showModal, ref }) => {
    const navigate = useNavigate();

    // Helper function to format undefined or null values
    const formatValue = value => value || "N/A";

    return (
        <div
            id="medium-modal"
            tabIndex="-1"
            className="overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            <div className="relative w-full max-w-4xl p-6 rounded-lg shadow-lg bg-main-300">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {car.year} {car.brand} {car.model}
                    </h3>
                    <button
                        onClick={() => setModal(!showModal)}
                        className="text-main-600 rounded-lg text-sm p-1.5 hover:bg-main-400 hover:text-main-850"
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
                        <ul className="text-base leading-relaxed text-main-850">
                            <li><strong>Brand:</strong> {formatValue(car.brand)}</li>
                            <li><strong>Model:</strong> {formatValue(car.model)}</li>
                            <li><strong>Year:</strong> {formatValue(car.year)}</li>
                            <li><strong>Price:</strong> ${formatValue(car.price)}</li>
                            <li><strong>Mileage:</strong> {formatValue(car.miles)} miles</li>
                            <li><strong>Transmission:</strong> {formatValue(car.transmission === 1 ? "Manual" : "Automatic")}</li>
                            <li><strong>Inspected:</strong> {car.inspected ? "Yes" : "No"}</li>
                            <li><strong>Featured:</strong> {car.featured ? "Yes" : "No"}</li>
                        </ul>
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
                    <a
                        href={'https://carsandbids.com' + car.url}
                        target="_blank"
                        className="mx-3 inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-card-300 hover:bg-card-200 focus:ring-primary"
                        style={{ minWidth: "120px" }} rel="noreferrer"
                    >View Auction</a>
                    <button
                        onClick={() => {
                            setModal(!showModal);
                            navigate(`/car/${car.sale_id}`);
                        }}
                        className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-card-300 hover:bg-card-200 focus:ring-primary"
                        style={{ minWidth: "120px" }}
                    >
                        See more
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

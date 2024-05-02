import React from "react";

const BrandCard = ({ brand }) => {
    return (
        <div
            className="flex flex-col md:flex-row md:max-w-xl overflow-hidden rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 relative"
            style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 30%, rgba(255,255,255,0) 100%)' // Gradient effect
            }}
        >
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow z-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                <a
                    href={`/brands/${brand}`}
                    className="inline-flex items-center justify-center w-32 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ minWidth: "120px" }}
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default BrandCard;

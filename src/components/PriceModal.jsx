import React from 'react';
import CarPriceChart from './charts/CarPriceChart';

const PriceModal = ({ price, year, brand, model, carPrices, isOpen, setIsOpen }) => {
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen && (
                <div
                id="medium-modal"
                tabIndex="-1"
                className="overlay fixed inset-0 z-50 flex items-center justify-center p-4"
            >
                <div className="relative w-full max-w-4xl p-6 rounded-lg shadow-lg bg-main-300">
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            A {year} {brand} {model} is predicted to have cost ${price.toFixed(2).toLocaleString()}.
                        </h3>
                        <p className='text-base leading-relaxed text-main-850'>
                            These predictions are based on historical data and may not reflect the current market value.
                        </p>
                        <button
                            onClick={closeModal}
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
                    {/*<div className="">
                        <CarPriceChart data_label={`${model} Prices`} title='pppp' data={carPrices} />
            </div>*/}
                    {/*<div className="flex justify-end mt-4">
                        <a
                            href={'https://carsandbids.com'}
                            target="_blank"
                            className="mx-3 inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-card-300 hover:bg-card-175 focus:ring-primary"
                            style={{ minWidth: "120px" }} rel="noreferrer"
                        >View Auction</a>
                        <button
                            onClick={() => {

                            }}
                            className="inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-card-300 hover:bg-card-175 focus:ring-primary"
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
                        </div>*/}
                </div>
            </div>
            )}
        </div>
    );
};

export default PriceModal;
import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';

const ViewDetails = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            style={{ minWidth: "200px" }}
            className='border-none bg-card-300 inline-flex items-center justify-center w-32 py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-0 focus:outline-none '>

            View Details
            {/*<svg
                className="ml-2 -mr-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>*/}
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
    );
};

export default ViewDetails;
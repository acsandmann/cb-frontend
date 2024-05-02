import React from 'react';
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const ViewDetails = ({ onClick }) => {
    return (
        <Button onClick={onClick} color="blue" className='border-none'>

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
        </Button>
    );
};

export default ViewDetails;
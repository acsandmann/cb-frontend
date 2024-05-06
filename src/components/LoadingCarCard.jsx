import React from "react";
import { motion } from "framer-motion";

const LoadingCarCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row md:max-w-xl overflow-hidden rounded-md bg-card-150 relative my-4"
        >
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow z-10">
                <div className="animate-pulse mb-2 h-6 bg-gray-700 rounded w-7/8"></div> 
                <div className="animate-pulse h-3 bg-gray-700 w-2/4"></div>
                <hr className="bg-white my-2 opacity-5"></hr>
                <div className="mb-3 space-y-2">
                    <div className="animate-pulse h-4 bg-gray-700 rounded "></div> 
                    <div className="animate-pulse h-4 bg-gray-700 rounded w-1/2"></div> 
                </div>
            
            </div>
            <div className="md:w-2/5 flex-none z-10">
                <div className="animate-pulse w-full h-full bg-gray-700 rounded-b-md md:rounded-none md:rounded-r-md"></div> {/* Simulated image */}
            </div>
        </motion.div>
    );
};

export default LoadingCarCard;

import React from "react";
import { motion } from "framer-motion";

const LoadingCarCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row md:max-w-xl overflow-hidden rounded-lg bg-card-150 relative"
        >
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow z-10">
                <div className="animate-pulse mb-2 h-6 bg-gray-700 rounded w-3/4"></div> 
                <div className="mb-3 space-y-2">
                    <div className="animate-pulse h-4 bg-gray-700 rounded w-1/2"></div> 
                    <div className="animate-pulse h-4 bg-gray-700 rounded w-1/3"></div> 
                    <div className="animate-pulse h-4 bg-gray-700 rounded w-1/4"></div> 
                </div>
                <div className="animate-pulse h-10 bg-card-300 opacity-50 rounded w-32"></div> 
            </div>
            <div className="md:w-2/5 flex-none z-10">
                <div className="animate-pulse w-full h-full bg-gray-700 rounded-b-lg md:rounded-none md:rounded-r-lg"></div> {/* Simulated image */}
            </div>
        </motion.div>
    );
};

export default LoadingCarCard;

/*
style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 30%, rgba(255,255,255,0) 100%)'
            }}
            */
import React from "react";
import { motion } from "framer-motion";
import ViewDetails from "./buttons/ViewDetails";

function get_transmission(t) {
    switch (t) {
        case 1: return 'Manual'
        case 2: return 'Automatic'
        default: return 'Unknown'
    }
}

const CarCard = ({ car, showModal, setModal, setCar }) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.02}}
            className="flex flex-col md:flex-row md:max-w-xl overflow-hidden rounded-lg shadow bg-card-150 hover:bg-card-175 text-white relative"
        >
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow z-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{`${car.year} ${car.brand} ${car.model}`}</h5>
                <p className="mb-3 font-normal text-gray-400">
                    Mileage: {car.miles !== null ? car.miles.toLocaleString() : "N/A"} miles <br/>
                    Transmission: {get_transmission(car.transmission)} <br/>
                    Inspected: {car.inspect ? "Yes" : "No"} <br/>
                </p>
                <ViewDetails onClick={() => {
                    setModal(!showModal);
                    setCar(car);
                }}/>
            </div>
            <div className="md:w-2/5 flex-none z-10">
                <img
                    className="w-full h-full object-cover rounded-b-lg md:rounded-none md:rounded-r-lg"
                    src={car.image_url}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                />
            </div>

        </motion.div>
    );
};

export default CarCard;

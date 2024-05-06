import React from "react";
import { motion } from "framer-motion";
import r from '../r.json';

/*
{[
                        car.miles !== null ? `${car.miles.toLocaleString()} Miles` : '',
                        get_transmission(car.transmission),
                        car.inspect ? "Inspected" : '',
                        car.featured ? "Featured" : '',
                        ev(car).ev ? `Electric Vehicle · ${ev(car).range} miles of range` : '',
                        car.horsepower ? car.horsepower : '',
                        car.ownership ? car.ownership : '',
                        car.modifications ? car.modifications : ''
                    ].filter(Boolean).join(' · ')}
                    */

function ev(c) {
    const foundCar = r.find(car => car.Model.includes(`${c.year} ${c.brand} ${c.model}`));
    return foundCar ? { ev: true, range: parseInt(foundCar.Range) } : { ev: false, range: 0 };
}

const CarCard = ({ car, showModal, setModal, setCar }) => {
    const e = ev(car);
    if (e.ev && !car.extra.includes('range')) car.extra += ` · ${e.range} miles of range`;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row md:max-w-xl overflow-hidden rounded-md bg-card-150 hover:bg-card-175 text-white relative"
        >
            <div className="flex flex-col justify-between p-4 leading-normal flex-grow z-10">
                <h5 className="flex mb-1 text-xl font-bold tracking-tight text-white">
                    {`${car.year} ${car.brand} ${car.model}`}
                </h5>
                <p className="text-base font-semibold text-gray-400">
                    {car.price ? `$${car.price.toLocaleString()}` : 'Price not available'}
                </p>
                <hr className="bg-white my-2 opacity-5"></hr>
                <p className="mb-3 font-normal text-gray-400 text-sm">
                    {car.extra.replace(/(?<!\d),|,(?!\d)/g, ' · ')}
                </p>
                {/*setModal &&
                    <ViewDetails onClick={() => {
                        setModal(!showModal);
                        setCar(car);
                    }} />*/}
            </div>
            <div className="md:w-2/5 flex-none relative z-10">
                <img
                    className="w-full h-full object-cover rounded-b-md md:rounded-none md:rounded-r-md"
                    src={car.image_url}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                />
                {/*<span className="opacity-90 bg-card-300 text-white text-sm font-medium px-2.5 py-1 rounded-md absolute bottom-0 right-0 mb-2 mr-2 z-20">
                    ${car.price?.toLocaleString()}
                </span>*/}
            </div>


        </motion.div>
    );
};

export default CarCard;

import React, { useEffect, useState } from 'react';
import CarPriceChartCard from './components/CarPriceChartCard';
import BrandPriceChart from './components/BrandPriceChart';
import LoadingCard from './components/LoadingCard';

const Analytics = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch("http://localhost:6969/cars/");
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className="container mx-auto px-4">
            {cars.length === 0 ? <LoadingCard /> : <CarPriceChartCard carData={cars} />}
            {cars.length === 0 ? <LoadingCard /> : <BrandPriceChart data={cars} />}
        </div>
    );
};

export default Analytics;
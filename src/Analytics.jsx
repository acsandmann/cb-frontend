import React, { useEffect, useState } from 'react';
import CarPriceChartCard from './components/CarPriceChartCard';
import BrandPriceChart from './components/BrandPriceChart';
import LoadingCard from './components/LoadingCard';
import { useFetch } from './util';

const Analytics = () => {
    const { data: cars, loading, error } = useFetch("http://localhost:6969/cars/");

    return (
        <div className="container mx-auto px-4">
            {loading ? <LoadingCard /> : <CarPriceChartCard carData={cars} />}
            {loading ? <LoadingCard /> : <BrandPriceChart data={cars} />}
        </div>
    );
};

export default Analytics;
import React from 'react';
import CarPriceChartCard from './components/charts/CarPriceChartCard';
import BrandPriceChart from './components/charts/BrandPriceChart';
import ModelPopularityChart from './components/charts/ModelPopularityChart';
import TransmissionTypeChart from './components/charts/TransmissionTypeChart';
import LoadingCard from './components/LoadingCard';
import { useFetch } from './util';

const Analytics = () => {
    const { data: cars, loading, error } = useFetch("http://localhost:6969/cars/");

    if (loading) return <div className="container mx-auto px-4"><LoadingCard /></div>;
    if (error) return <p className="text-red-500 text-center">Error loading data! Please try again later.</p>;


    return (
        <div className="bg-dark-800 min-h-screen">
            <div className="border-main-border border-b mb-6 container mx-auto px-4 flex flex-wrap justify-center items-stretch">
                <div className="w-full md:w-1/2 p-4"><CarPriceChartCard data={cars} /></div>
                <div className="w-full md:w-1/2 p-4"><TransmissionTypeChart data={cars} /></div>
                <div className='w-full md:w-1/2 p-4'><ModelPopularityChart data={cars} /></div>
            </div>
            <BrandPriceChart data={cars} />
        </div>
    );
};

export default Analytics;

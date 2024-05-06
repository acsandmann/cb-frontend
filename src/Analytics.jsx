import React, { useEffect, useState } from 'react';
import CarPriceChartCard from './components/charts/CarPriceChartCard';
import BrandPriceChart from './components/charts/BrandPriceChart';
import ModelPopularityChart from './components/charts/ModelPopularityChart';
import InspectionStatusChart from './components/charts/InspectionStatusChart';
import TransmissionTypeChart from './components/charts/TransmissionTypeChart';
import LoadingCard from './components/LoadingCard';
import { useFetch } from './util';

const Analytics = () => {
    const { data: cars, loading, error } = useFetch("https://api.yourdomain.com/cars/");

    // Centralized loading and error handling
    if (loading) return <div className="container mx-auto px-4"><LoadingCard /></div>;
    if (error) return <p className="text-red-500 text-center">Error loading data! Please try again later.</p>;

    // Chart container styling for better visual hierarchy and spacing
    const chartContainerStyle = "chart-card m-4 p-4 bg-dark-900 text-white rounded-lg shadow-xl";

    return (
        <div className="bg-dark-800 min-h-screen">
            <h2 className="text-center text-xl text-white font-bold py-4">(work in progress)</h2>
            <div className="container mx-auto px-4 flex flex-wrap justify-center items-stretch">
                <div className={chartContainerStyle}><CarPriceChartCard data={cars} /></div>
                <div className={chartContainerStyle}><BrandPriceChart data={cars} /></div>
                <div className={chartContainerStyle}><ModelPopularityChart data={cars} /></div>
                <div className={chartContainerStyle}><InspectionStatusChart data={cars} /></div>
                <div className={chartContainerStyle}><TransmissionTypeChart data={cars} /></div>
            </div>
        </div>
    );
};

export default Analytics;

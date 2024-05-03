import React, { useEffect, useState } from 'react';
import CarPriceChartCard from './components/charts/CarPriceChartCard';
import BrandPriceChart from './components/charts/BrandPriceChart';
import ModelPopularityChart from './components/charts/ModelPopularityChart';
import InspectionStatusChart from './components/charts/InspectionStatusChart';
import TransmissionTypeChart from './components/charts/TransmissionTypeChart';
//import FeatureStatusChart from './components/charts/FeatureStatusChart';
import LoadingCard from './components/LoadingCard';
import { useFetch } from './util';

const Analytics = () => {
    const { data: cars, loading, error } = useFetch("https://api.yourdomain.com/cars/");

    if (loading) return <div className="container mx-auto px-4"><LoadingCard /></div>;
    if (error) return <p>Error loading data!</p>;

    return (
        <div>
        <h2 className="text-white">(work in progress)</h2>
        <div className="container2">
            {loading ? <LoadingCard /> : <div className="chart-card"><CarPriceChartCard data={cars} /></div>}
            {loading ? <LoadingCard /> : <div className="chart-card"><BrandPriceChart data={cars} /></div>}
            {loading ? <LoadingCard /> : <div className="chart-card"><ModelPopularityChart data={cars} /></div>}
            {loading ? <LoadingCard /> : <div className="chart-card"><InspectionStatusChart data={cars} /></div>}
            {loading ? <LoadingCard /> : <div className="chart-card"><TransmissionTypeChart data={cars} /></div>}
            {/*<FeatureStatusChart data={cars} />*/}
        </div>
        </div>
    );
};

export default Analytics;

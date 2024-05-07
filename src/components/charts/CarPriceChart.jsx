import React from 'react';
import { Line } from 'react-chartjs-2';

const CarPriceChart = ({ title, data, data_label }) => {
    // Sample data for historical car prices
    const d = {
        labels: data.map(x => x.label),
        datasets: [
            {
                label: data_label,
                data: data.map(x => x.data),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>{title}</h2>
            <Line data={d} />
        </div>
    );
};

export default CarPriceChart;
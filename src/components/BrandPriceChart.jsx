import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function aggregateDataByBrand(cars) {
    const brandData = {};

    cars.forEach(car => {
        if (brandData[car.brand]) {
            brandData[car.brand].push(car.price);
        } else {
            brandData[car.brand] = [car.price];
        }
    });

    return Object.keys(brandData).map(brand => ({
        brand: brand,
        averagePrice: brandData[brand].reduce((a, b) => a + b, 0) / brandData[brand].length,
        totalSales: brandData[brand].length
    }));
};

const BrandPriceChart = ({ data }) => {
    data = aggregateDataByBrand(data);
    const chartData = {
        labels: data.map(item => item.brand),
        datasets: [{
            label: 'Average Price',
            data: data.map(item => item.averagePrice),
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Car Price by Brand'
            }
        }
    };

    return (
        <div className="chart-card m-5" style={{ width: "600px", height: "400px" }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BrandPriceChart;

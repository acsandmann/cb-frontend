import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const aggregateData = (data) => {
    const grouped = data.reduce((acc, cur) => {
        const week = new Date(cur.end_date).getWeek();
        if (!acc[week]) {
            acc[week] = [];
        }
        acc[week].push(cur.price);
        return acc;
    }, {});

    return Object.keys(grouped).map(week => {
        const prices = grouped[week];
        const average = prices.reduce((sum, p) => sum + p, 0) / prices.length;
        return { week, averagePrice: average };
    });
};

const CarPriceChartCard = ({ carData }) => {
    const aggregatedData = aggregateData(carData);

    const data = {
        labels: aggregatedData.map(data => `week ${data.week + 1}`),
        datasets: [{
            label: 'Average Car Prices',
            data: aggregatedData.map(data => data.averagePrice),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Price in USD'
                }
            }
        },
        responsive: true,
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        maintainAspectRatio: false
    };

    return (
        <div className="chart-card" style={{ width: "600px", height: "400px" }}>
            <h3>Car Price Trends</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default CarPriceChartCard;
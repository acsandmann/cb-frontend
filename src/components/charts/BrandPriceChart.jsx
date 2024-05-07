import React, { useState, useMemo } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Tooltip, Legend);

const getWeekNumber = (date) => {
    const d = new Date(date);
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

const aggregateDataByBrand = (data, selectedBrand) => {
    const filteredData = data.filter(car => car.brand === selectedBrand);
    const grouped = filteredData.reduce((acc, cur) => {
        const week = getWeekNumber(cur.end_date);
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

const aggregateTransmissionData = (data, selectedBrand) => {
    const filteredData = data.filter(car => car.brand === selectedBrand);
    const transmissionCounts = filteredData.reduce((acc, car) => {
        const type = car.transmission === 1 ? 'Manual' : 'Automatic';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    return {
        labels: Object.keys(transmissionCounts),
        datasets: [{
            label: 'Number of Cars',
            data: Object.values(transmissionCounts),
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };
};

const aggregateModelData = (data, selectedBrand) => {
    const filteredData = data.filter(car => car.brand === selectedBrand);
    const modelCounts = filteredData.reduce((acc, car) => {
        acc[car.model] = (acc[car.model] || 0) + 1;
        return acc;
    }, {});

    const totalCount = Object.values(modelCounts).reduce((sum, count) => sum + count, 0);
    const threshold = 0.01 * totalCount;  // Models must represent at least 5% of the total

    // Group smaller categories into "Other"
    const significantModels = [];
    let otherCount = 0;

    Object.entries(modelCounts).forEach(([model, count]) => {
        if (count > threshold) {
            significantModels.push({ model, count });
        } else {
            otherCount += count;
        }
    });

    if (otherCount > 0) {
        significantModels.push({ model: 'Other', count: otherCount });
    }

    const chartData = {
        labels: significantModels.map(item => item.model),
        datasets: [{
            data: significantModels.map(item => item.count),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A', '#FDB45C', 'rgba(100,100,100,0.7)'],
        }]
    };

    return chartData;
};



const CarPriceChartCard = ({ data }) => {
    const [selectedBrand, setSelectedBrand] = useState('Mercedes-AMG');
    const transmissionData = aggregateTransmissionData(data, selectedBrand);
    const modelChartData = aggregateModelData(data, selectedBrand);
    const brands = Array.from(new Set(data.map(car => car.brand)));

    const aggregatedData = useMemo(() => aggregateDataByBrand(data, selectedBrand), [data, selectedBrand]);

    const chartData = {
        labels: aggregatedData.map(data => `Week ${data.week}`),
        datasets: [{
            label: `Average Price for ${selectedBrand}`,
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
        <div>
            {/* Centered Dropdown */}
            <div className='flex justify-center items-center mx-auto mt-4'>
                <select
                    id="brand-select"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="text-white bg-card-300 hover:bg-card-200 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center focus:ring-0 focus:outline-none"
                >
                    {brands.sort().map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>

            {/* Chart Container */}
            <div className="container mx-auto px-4 flex flex-wrap justify-center items-stretch">
                <div className="chart-card m-5 w-1/4" style={{ height: "400px" }}>
                    <Line data={chartData} options={options} />
                </div>
                <div className="chart-card m-5 w-1/4" style={{ height: "400px" }}>
                    <Bar data={transmissionData} options={{ scales: { y: { beginAtZero: true } } }} />
                </div>
                <div className="chart-card m-5 w-1/4" style={{ height: "400px" }}>
                    <Pie data={modelChartData} />
                </div>
            </div>
        </div>

    );
};

export default CarPriceChartCard;

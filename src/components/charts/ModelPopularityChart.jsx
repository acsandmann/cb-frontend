import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const aggregateModelData = (data) => {
    const modelCounts = data.reduce((acc, car) => {
        acc[car.model] = (acc[car.model] || 0) + 1;
        return acc;
    }, {});

    return {
        labels: Object.keys(modelCounts),
        datasets: [{
            data: Object.values(modelCounts),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A', '#FDB45C'],
        }]
    };
};

const ModelPopularityChart = ({ data }) => {
    const modelChartData = aggregateModelData(data);

    return (
        <div className="chart-card m-5" style={{ width: "100%", height: "400px" }}>
            <Pie data={modelChartData} />
        </div>
    );
};

export default ModelPopularityChart;

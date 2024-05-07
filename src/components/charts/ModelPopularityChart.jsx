import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

const aggregateModelData = (data) => {
    const modelCounts = data.reduce((acc, car) => {
        acc[car.model] = (acc[car.model] || 0) + 1;
        return acc;
    }, {});

    const sortedModelCounts = Object.entries(modelCounts)
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, 20);

    return {
        labels: sortedModelCounts.map(item => item[0]), 
        datasets: [{
            data: sortedModelCounts.map(item => item[1]), 
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

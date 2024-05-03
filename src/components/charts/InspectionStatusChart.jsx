import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const aggregateInspectionData = (data) => {
    const counts = { inspected: 0, notInspected: 0 };
    data.forEach(car => {
        if (car.inspected) {
            counts.inspected += 1;
        } else {
            counts.notInspected += 1;
        }
    });

    return {
        labels: ['Inspected', 'Not Inspected'],
        datasets: [{
            data: [counts.inspected, counts.notInspected],
            backgroundColor: ['#36A2EB', '#FF6384'],
        }]
    };
};

const InspectionStatusChart = ({ data }) => {
    const inspectionData = aggregateInspectionData(data);

    return (
        <div className="chart-card m-5" style={{ width: "100%", height: "400px" }}>
            <Doughnut data={inspectionData} />
        </div>
    );
};

export default InspectionStatusChart;

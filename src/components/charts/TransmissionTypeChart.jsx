import { Bar } from 'react-chartjs-2';

const aggregateTransmissionData = (data) => {
    const transmissionCounts = data.reduce((acc, car) => {
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

const TransmissionTypeChart = ({ data }) => {
    const transmissionData = aggregateTransmissionData(data);

    return (
        <div className="chart-card m-5" style={{ width: "100%", height: "400px" }}>
            <Bar data={transmissionData} options={{ scales: { y: { beginAtZero: true } }}} />
        </div>
    );
};

export default TransmissionTypeChart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CarMarketMomentumChart = ({ data }) => {
  // Parse and aggregate data
  const aggregateData = data.reduce((acc, car) => {
    const date = car.end_date; // Assuming date format is MM/DD/YY
    if (acc[date]) {
      acc[date].total += car.price;
      acc[date].count += 1;
    } else {
      acc[date] = { total: car.price, count: 1 };
    }
    return acc;
  }, {});

  // Convert aggregated data to array suitable for charting
  const chartData = Object.keys(aggregateData).map(date => ({
    date,
    averagePrice: aggregateData[date].total / aggregateData[date].count
  }));

  // Sort data by date
  chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averagePrice" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CarMarketMomentumChart;

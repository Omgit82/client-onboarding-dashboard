import React from 'react';
import mockUsageData from '../data/mockUsageData';
import ChartSection from './ChartSection';

const Dashboard = () => {
  return (
    <main>
      <ChartSection data={mockUsageData} />
    </main>
  );
};

export default Dashboard;

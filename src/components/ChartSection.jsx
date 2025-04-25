import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ChartSection = ({ data }) => {
  const featureData = {
    labels: data.featureAdoption.map(f => f.feature),
    datasets: [
      {
        label: 'Feature Usage (%)',
        data: data.featureAdoption.map(f => f.usage),
        backgroundColor: '#1B9AAA'
      }
    ]
  };

  const ticketData = {
    labels: data.supportTickets.map(t => t.month),
    datasets: [
      {
        label: 'Support Tickets',
        data: data.supportTickets.map(t => t.tickets),
        borderColor: '#F46036',
        fill: false
      }
    ]
  };

  const onboardingData = {
    labels: data.onboardingStatus.map(o => o.client),
    datasets: [
      {
        label: 'Onboarding Status',
        data: data.onboardingStatus.map((o, i) => i + 1),
        backgroundColor: ['#2E294E', '#EF476F', '#FFD166']
      }
    ]
  };

  return (
    <div style={{ display: 'grid', gap: '2rem', padding: '2rem' }}>
      <div>
        <h2>Feature Adoption</h2>
        <Bar data={featureData} />
      </div>
      <div>
        <h2>Support Ticket Volume</h2>
        <Line data={ticketData} />
      </div>
      <div>
        <h2>Client Onboarding Status</h2>
        <Pie data={onboardingData} />
      </div>
    </div>
  );
};

export default ChartSection;

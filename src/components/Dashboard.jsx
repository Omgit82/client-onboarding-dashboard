import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Register chart.js components
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

const Dashboard = () => {
  const [data, setData] = useState({
    featureAdoption: [],
    supportTickets: [],
    onboardingStatus: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuresRes, ticketsRes, onboardingRes] = await Promise.all([
          axios.get('http://localhost:5000/featureAdoption'),
          axios.get('http://localhost:5000/supportTickets'),
          axios.get('http://localhost:5000/onboardingStatus'),
        ]);

        setData({
          featureAdoption: featuresRes.data,
          supportTickets: ticketsRes.data,
          onboardingStatus: onboardingRes.data,
        });
      } catch (error) {
        console.error('❌ API fetch failed:', error.message);
      }
    };

    fetchData();
  }, []);

  // Chart data config
  const featureData = {
    labels: data.featureAdoption.map((f) => f.feature),
    datasets: [
      {
        label: 'Feature Usage (%)',
        data: data.featureAdoption.map((f) => f.usage),
        backgroundColor: '#1B9AAA',
      },
    ],
  };

  const ticketData = {
    labels: data.supportTickets.map((t) => t.month),
    datasets: [
      {
        label: 'Support Tickets',
        data: data.supportTickets.map((t) => t.tickets),
        borderColor: '#F46036',
        fill: false,
      },
    ],
  };

  // Onboarding status data - for Pie Chart
  const statusCounts = data.onboardingStatus.reduce(
    (acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const onboardingData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Onboarding Status',
        data: Object.values(statusCounts),
        backgroundColor: ['#2E294E', '#EF476F', '#FFD166'],
      },
    ],
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
        <div style={{ width: '300px', height: '300px' }}>
          {/* Limit the size of the Pie chart */}
          <Pie data={onboardingData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

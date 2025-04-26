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
        backgroundColor: '#1B9AAA',
        hoverBackgroundColor: '#17A2B8',
        borderRadius: 8,
        borderWidth: 1,
        hoverBorderWidth: 2
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
        fill: false,
        lineTension: 0.4,  // Adds curve to the line
        borderWidth: 2
      }
    ]
  };

  const onboardingData = {
    labels: data.onboardingStatus.map(o => o.client),
    datasets: [
      {
        label: 'Onboarding Status',
        data: data.onboardingStatus.map((o, i) => i + 1),
        backgroundColor: ['#2E294E', '#EF476F', '#FFD166'],
        hoverOffset: 10  // Slight hover effect for pie chart
      }
    ]
  };

  // Chart options for responsiveness and tooltip customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
          }
        }
      }
    },
    elements: {
      point: {
        radius: 5,  // Point size for Line chart
        hoverRadius: 8,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,  // Removes x-axis grid lines
        }
      },
      y: {
        grid: {
          color: '#f2f2f2',  // Light gray grid lines for y-axis
        }
      }
    }
  };

  return (
    <div style={{ display: 'grid', gap: '3rem', padding: '2rem', backgroundColor: '#F8F8F8', borderRadius: '10px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#2E294E', fontSize: '2rem' }}>Feature Adoption</h2>
        <div style={{ width: '100%', height: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
          <Bar data={featureData} options={chartOptions} />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#2E294E', fontSize: '2rem' }}>Support Ticket Volume</h2>
        <div style={{ width: '100%', height: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
          <Line data={ticketData} options={chartOptions} />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#2E294E', fontSize: '2rem' }}>Client Onboarding Status</h2>
        <div style={{ width: '100%', height: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
          <Pie data={onboardingData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChartSection from './components/Dashboard';

const App = () => {
  const [data, setData] = useState({
    featureAdoption: [],
    supportTickets: [],
    onboardingStatus: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from the mock API
        const featureAdoptionResponse = await axios.get('http://localhost:5000/featureAdoption');
        const supportTicketsResponse = await axios.get('http://localhost:5000/supportTickets');
        const onboardingStatusResponse = await axios.get('http://localhost:5000/onboardingStatus');
        
        // Updating state with the fetched data
        setData({
          featureAdoption: featureAdoptionResponse.data,
          supportTickets: supportTicketsResponse.data,
          onboardingStatus: onboardingStatusResponse.data,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />  {/* Sidebar on the left */}
        <div style={{ marginLeft: '250px', padding: '2rem', width: '100%' }}>
          <Header />  {/* Header component */}
          <Routes>
            <Route path="/" element={<ChartSection data={data} />} />
            {/* You can add additional routes for different pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

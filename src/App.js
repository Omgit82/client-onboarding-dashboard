import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
